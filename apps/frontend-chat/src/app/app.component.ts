import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';

@Component({
  imports: [RouterModule, ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-chat';
  form!: FormArray;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.array([
      {
        name: this.fb.group({
          lastName: this.fb.control(''),
        }),
      },
    ]);

    console.log(this.form);
  }
}
