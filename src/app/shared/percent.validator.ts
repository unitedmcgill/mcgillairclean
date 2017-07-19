import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
export function validatePercentFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = (c.value >= 0 && c.value <= 100)
    
    if(isValid) {
      return null;
    } else {
      return {
        percent: {
          valid: false
        }
      };
    }

  }
}


@Directive({
  selector: '[percent][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PercentValidator, multi: true }
  ]
})

export class PercentValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validatePercentFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}