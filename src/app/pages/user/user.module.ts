import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UsersListComponent} from './users-list/users-list.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersListComponent,
    UsersPageComponent,
    NewUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
