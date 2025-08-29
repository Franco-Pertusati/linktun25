import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/register-form/register-form.component";

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: '../auth-styles.css'
})
export class RegisterComponent {

}
