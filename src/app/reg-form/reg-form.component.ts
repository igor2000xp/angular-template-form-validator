import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PassValidatorDirective } from '../share/directives/pass-validator.directive';
import { NameValidatorDirective } from '../share/directives/name-validator.directive';
import { EmailValidatorDirective } from '../share/directives/email-validator.directive';

@Component({
  selector: 'app-reg-form',
  imports: [CommonModule, FormsModule, PassValidatorDirective, NameValidatorDirective, EmailValidatorDirective],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css',
})
export class RegFormComponent {
  user = {
    name: '',
    email: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };

  // It.s important for different reasons testing.

  // confirmPassword = '';

  // onSubmit(form: SubmitEvent): void {
  //   console.log('You submitted value:', form);
  //   // @ts-expect-error: ng is not defined
  //   console.log(window.ng.getDirectives(form.target));
  // }
  // asdA123!
  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault(); // Prevent default action for the submit event;
    // console.log('You submitted value:', form);

    // That is the way to get the value of the form. And separate the password and confirmPassword.
    const { confirmPassword, password, ...restForm } = form.value;
    console.log('confirmPassword: ', confirmPassword);
    console.log('password: ', password);
    console.log('restForm: ', restForm);
  }

  // trackByFn(index: number, item: { message: string }): string {
  //   return item.message;
  // }
}
