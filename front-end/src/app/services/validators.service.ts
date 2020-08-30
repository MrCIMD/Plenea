import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  public confirmation(pass1: string, pass2: string) {
    return (form_group: FormGroup) => {
      const pass1_control = form_group.controls[pass1];
      const pass2_control = form_group.controls[pass2];
      if (pass1_control.value === pass2_control.value) {
        pass2_control.setErrors(null);
      } else {
        pass2_control.setErrors({ no_confirmation: true });
      }
    };
  }
}
