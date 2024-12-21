const MAX_LOCAL_PART_LENGTH = 45;
const MIN_LOCAL_PART_LENGTH = 2;
const MAX_DOMAIN_LENGTH = 85;
const MIN_DOMAIN_LENGTH = 5;
const MIN_FIRST_LEVEL_DOMAIN_LENGTH = 3;
const MIN_TOP_LEVEL_DOMAIN_LENGTH = 2;
const AT_SYMBOL_MESSAGE = 'Email must contain one @ symbol';
const SPELL_PART_MESSAGE =
  'Only letters, numbers, and special characters may be used in the email.s sections., _, - and it must have the correct length.';

import { AbstractControl } from '@angular/forms';

export class EmailChecker {
  static checkAtSymbols(control: AbstractControl): boolean {
    if (!control.value) return false;
    const atArray = control.value.split('@');
    return atArray.length === 2;
  }

  static checkLocalPart(control: AbstractControl): boolean {
    if (!control.value) return false;
    const atArray = control.value.split('@');
    const localPart = atArray[0];
    /* The pattern '^[a-zA-Z0-9._-]+$' is used to define:
      ^ asserts the position at the start of the string.
      [a-zA-Z0-9._-] specifies a character class that matches any single alphanumeric character (both uppercase and lowercase), 
        as well as the special characters ., _, and -.
      + is a quantifier that means "one or more" of the preceding element.
      $ asserts the position at the end of the string.
    */
    const regexp = new RegExp('^[a-zA-Z0-9._-]+$');
    const checkLocalPart = regexp.test(localPart);

    const checkLength = localPart.length >= MIN_LOCAL_PART_LENGTH && localPart.length <= MAX_LOCAL_PART_LENGTH;
    return checkLength && checkLocalPart;
  }

  static checkDomain(control: AbstractControl): boolean {
    if (!control.value) return false;
    const atArray = control.value.split('@');
    const domain = atArray[1];
    if (!domain) return false;
    /* The pattern '^[a-zA-Z0-9.-]+$' is used to define:
      ^ asserts the position at the start of the string.
      [a-zA-Z0-9.-] specifies a character class that matches any single alphanumeric character (both uppercase and lowercase), 
        as well as the special characters . and -.
      + is a quantifier that means "one or more" of the preceding element.
      $ asserts the position at the end of the string.
    */
    const regexp = new RegExp('^[a-zA-Z0-9.-]+$');
    const checkDomainSpelling = regexp.test(domain);

    // Split the domain at the last dot to separate the domain and top-level domain
    const lastDotIndex = domain.lastIndexOf('.');
    if (
      lastDotIndex === -1 &&
      lastDotIndex < MIN_TOP_LEVEL_DOMAIN_LENGTH &&
      domain.length - lastDotIndex < MIN_FIRST_LEVEL_DOMAIN_LENGTH
    )
      return false;

    const checkLengthDomen = domain.length >= MIN_DOMAIN_LENGTH && domain.length <= MAX_DOMAIN_LENGTH;
    // NO NEEDED

    // const topLevelDomain = domain.split('.');
    // if (!topLevelDomain[1]) return false;
    // const checkLengthTopLevelDomain =
    //   topLevelDomain[1].length >= MIN_TOP_LEVEL_DOMAIN_LENGTH &&
    //   topLevelDomain[1].length <= MAX_TOP_LEVEL_DOMAIN_LENGTH;

    // return checkLengthDomen && checkDomainSpelling && checkLengthTopLevelDomain;
    return checkLengthDomen && checkDomainSpelling;
  }

  static allEmailChecks(control: AbstractControl): object[] | null {
    const messages: object[] = [];
    if (!EmailChecker.checkAtSymbols(control)) {
      messages.push({ message: AT_SYMBOL_MESSAGE });
    }
    if (!EmailChecker.checkLocalPart(control) || !EmailChecker.checkDomain(control)) {
      messages.push({ message: SPELL_PART_MESSAGE });
    }

    return messages;
  }
}
