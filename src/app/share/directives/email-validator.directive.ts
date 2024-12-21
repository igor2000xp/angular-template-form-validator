import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { EmailChecker } from './email-checker';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  change!: () => void;
  validate(control: AbstractControl): ValidationErrors | null {
    const checker = EmailChecker.allEmailChecks(control);
    return String(checker) === '' ? null : { EmailValidatorDirective: checker };
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.change = fn;
  }
}
