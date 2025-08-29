import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { UrlInputComponent } from "./components/url-input/url-input.component";
import { LandingHeaderComponent } from "./components/landing-header/landing-header.component";
import { LandingUrlListComponent } from "./components/landing-url-list/landing-url-list.component";
import { DialogService } from '../../core/services/dialog.service';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';

@Component({
  selector: 'app-landing-page',
  imports: [UrlInputComponent, LandingHeaderComponent, ButtonComponent, LandingUrlListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  dialogService = inject(DialogService);

  openRegisterDialog() {
    this.dialogService.openDialog(RegisterComponent)
  }

  openLoginDialog() {
    this.dialogService.openDialog(LoginFormComponent)
  }
}
