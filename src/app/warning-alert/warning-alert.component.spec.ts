
// this is a test file, don't worry, the application will run fine, even if there are any test that dont pass.
// to see if the warning module is working fine or if you want do make a TDD just run the application as  'ng test'
// on command line(terminal)
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningAlertComponent } from './warning-alert.component';

describe('WarningAlertComponent', () => {
  let component: WarningAlertComponent;
  let fixture: ComponentFixture<WarningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
