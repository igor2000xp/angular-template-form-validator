import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css',
})
export class FormExampleComponent {
  username = '';

  onMyChange(str: string) {
    // this.username = str;
    console.log(this.username);
  }
}
