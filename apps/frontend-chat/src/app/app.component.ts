import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { appRoutes } from './app.routes';
import { TextareaComponent } from '@frontend-chat/textarea';

@Component({
  imports: [RouterModule, ReactiveFormsModule, TextareaComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-chat';

  form: any;

  constructor(private fb: FormBuilder) {}
}
