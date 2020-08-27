import { TestComponent } from './test.component';

describe('TestComponent', () => {
  it('clicked should toggle isOn', () => {
    const comp = new TestComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after first click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('clicked should emit new value', (done) => {
    const comp = new TestComponent();
    comp.isOnChange.subscribe((isOn) => {
      expect(isOn).toBe(true);
      done();
    });
    comp.clicked();
  });
});
