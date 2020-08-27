import { TestMockComponent } from './test-mock.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user.service';
import { By } from '@angular/platform-browser';

describe('TestMockDOMComponent', () => {
  let component: TestMockComponent;
  let fixture: ComponentFixture<TestMockComponent>;
  let userService: UserService;
  const userServiceSub: Partial<UserService> = {
    isLoggedIn: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestMockComponent],
      providers: [
        {
          provide: UserService,
          useValue: userServiceSub,
        },
      ],
    });

    fixture = TestBed.createComponent(TestMockComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
  });

  it('should have <p> element with empty content', () => {
    const debugElement = fixture.debugElement;
    const pElement = debugElement.query(By.css('p'));
    expect(pElement.nativeElement.textContent).toEqual('');
  });

  it('should have <p> element with content after detectChanges()', () => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const pElement = debugElement.query(By.css('p'));
    expect(pElement.nativeElement.textContent).toEqual('Welcome old friend');
  });

  it('should have <p> element with log in content', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const pElement = debugElement.query(By.css('p'));
    expect(pElement.nativeElement.textContent).toEqual('Please log in.');
  });
});
