import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'form-field',
  imports: [CommonModule, MatFormFieldModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {}
