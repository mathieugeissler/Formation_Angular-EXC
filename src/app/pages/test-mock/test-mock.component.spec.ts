import { TestMockComponent } from './test-mock.component';
import { UserService } from '../../services/user.service';
import { TestBed } from '@angular/core/testing';

describe('TestMockComponent', () => {
  let comp: TestMockComponent;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestMockComponent,
        {
          provide: UserService,
          useClass: MockUserService,
        },
      ],
    });
    comp = TestBed.inject(TestMockComponent);
    userService = TestBed.inject(UserService);
  });

  it('should not have welcome message after component construction', () => {
    expect(comp.message).toBeUndefined();
  });

  it('should have welcome message after onInit when is logged', () => {
    comp.ngOnInit();
    expect(comp.message).toBe('Welcome old friend');
  });

  it('should have log in message after onInit when is not logged', () => {
    userService.isLoggedIn = false;
    comp.ngOnInit();
    expect(comp.message).toBe('Please log in.');
  });
});

class MockUserService {
  isLoggedIn = true;
}
