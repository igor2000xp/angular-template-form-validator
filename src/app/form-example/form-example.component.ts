import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css',
})
export class FormExampleComponent {
  // username = '';

  user = {
    name: '',
    fullName: '',
    address: {
      street: '',
      bilding: 0,
    }
  }

  // onMyChange(str: string) {
  //   this.username = str;
  //   console.log(this.username);
  // }
  onSubmit(userForm: SubmitEvent) {
    console.log(userForm.target);
    // @ts-ignore
    console.log(window.ng.getDirectives(userForm.target)[2].value);
  }
}
