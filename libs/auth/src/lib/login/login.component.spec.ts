import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLoginComponent } from './login.component';

describe('AuthComponent', () => {
  let component: AuthLoginComponent;
  let fixture: ComponentFixture<AuthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
