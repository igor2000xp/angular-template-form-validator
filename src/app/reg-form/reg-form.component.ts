import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css'
})
export class RegFormComponent {
  user = {
    name: '',
    email: '',
    lastName: '',
    password: '',
  }

  onSubmit(form: SubmitEvent): void {
    console.log('You submitted value:', form);
  }

}
