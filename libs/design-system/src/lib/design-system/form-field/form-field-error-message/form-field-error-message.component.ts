import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mat-form-field-error-message',
  imports: [CommonModule],
  template: `
    @for (error of errorMessages(); track $index) {
    <p class="error-message">{{ error }}</p>
    }
  `,
  styleUrl: './form-field-error-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldErrorMessageComponent {
  errorMessages = input<string[]>();
}
