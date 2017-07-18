import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
export function validateGreaterThanZeroFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = c.value > 0;
    
    if(isValid) {
      return null;
    } else {
      return {
        greaterThanZero: {
          valid: false
        }
      };
    }

  }
}


@Directive({
  selector: '[greaterThanZero][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GreaterThanZeroValidator, multi: true }
  ]
})

export class GreaterThanZeroValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateGreaterThanZeroFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}