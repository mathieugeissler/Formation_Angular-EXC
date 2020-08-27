import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit, OnDestroy {
  public userForm: FormGroup;
  private newUserSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      age: [null, [Validators.min(1), Validators.max(99)]],
      city: [null, [Validators.required, Validators.pattern('Strasbourg')]],
    });
  }

  createUser(): void {
    if (this.userForm.valid) {
      this.newUserSubscription = this.userService
        .createUser(this.userForm.value)
        .pipe(tap(() => this.router.navigate(['/users'])))
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.newUserSubscription) {
      this.newUserSubscription.unsubscribe();
    }
  }
}
