import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validadorEmail(emailExp: RegExp): ValidatorFn {
  return (control:AbstractControl): {[key:string] : any} => {
    const email = emailExp.test(control.value);
    return !email ? {'Email': {value: control.value}}: null
  }
}