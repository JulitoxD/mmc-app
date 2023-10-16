import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-form-input',
  templateUrl: './form-input.component.html'
})
export class FormInputComponent {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() required: boolean;
}
