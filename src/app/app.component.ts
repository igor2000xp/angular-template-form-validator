import { Component } from '@angular/core';
import { FormExampleComponent } from './form-example/form-example.component';

@Component({
  selector: 'app-root',
  imports: [FormExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Angular';
}
