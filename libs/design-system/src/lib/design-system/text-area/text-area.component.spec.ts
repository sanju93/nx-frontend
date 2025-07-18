import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: MatTextAreaComponent;
  let fixture: ComponentFixture<MatTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTextAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
