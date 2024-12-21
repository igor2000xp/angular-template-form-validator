import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { PassChecker } from './pass-checker';

@Directive({
  selector: '[appPassValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassValidatorDirective,
      multi: true,
    },
  ],
})
export class PassValidatorDirective implements Validator {
  change!: () => void;

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('control:', control.value);
    // console.log('control length:', control.value?.length);
    const messages = PassChecker.allPassChecks(control);
    console.log('control messages:', messages);
    // this.change();
    return control.value?.length >= 6 ? null : { PassValidatorDirective: { messages } };
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
    this.change = fn;
  }
}
