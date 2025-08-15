import { Component } from '@angular/core';
import { GoogleAuthBtnComponent } from "../shared/google-auth-btn/google-auth-btn.component";

@Component({
  selector: 'app-login',
  imports: [GoogleAuthBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css'
})
export class LoginComponent {

}
