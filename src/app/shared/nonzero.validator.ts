import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
export function validateNonZeroFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = c.value !== 0;
    
    if(isValid) {
      return null;
    } else {
      return {
        nonZero: {
          valid: false
        }
      };
    }

  }
}


@Directive({
  selector: '[nonZero][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NonZeroValidator, multi: true }
  ]
})

export class NonZeroValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateNonZeroFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}