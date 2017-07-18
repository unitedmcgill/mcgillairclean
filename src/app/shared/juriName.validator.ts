import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
export function validateJuriNameFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = c.value === 'Juri';
    
    if(isValid) {
      return null;
    } else {
      return {
        juriName: {
          valid: false
        }
      };
    }

  }
}


@Directive({
  selector: '[juriName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: JuriNameValidator, multi: true }
  ]
})

export class JuriNameValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateJuriNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}