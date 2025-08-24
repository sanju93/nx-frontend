import { Component, importProvidersFrom, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { InputComponent } from '@design-system';

@Component({
  selector: 'dynamic-forms-generator',
  templateUrl: './dynamic-forms-core.component.html',
  imports: [FormlyModule],
  providers: [],
})
export class DynamicFormsGeneratorComponent {
  form = input<FormGroup>(new FormGroup({}));

  fields = input<FormlyFieldConfig[]>([]);

  model = input<Record<string, unknown>>();
}
