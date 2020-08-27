import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  it('should return true if age is adult', () => {
    const comp = new EditUserComponent(null);
    expect(comp.isAdult(20)).toBe(true);
  });
});
