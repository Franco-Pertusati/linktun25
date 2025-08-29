import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { DialogService } from '../../../../core/services/dialog.service';
import { LoginComponent } from '../../../auth/pages/login/login.component';

@Component({
  selector: 'app-landing-header',
  imports: [ButtonComponent],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent {
  dialogService = inject(DialogService);

  openLoginDialog() {
    this.dialogService.openDialog(LoginComponent)
  }
}
