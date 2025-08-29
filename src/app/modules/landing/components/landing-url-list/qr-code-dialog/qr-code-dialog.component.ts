import { Component, inject } from '@angular/core';
import { QrCodeComponent } from '../qr-code/qr-code.component';
import { DialogService } from '../../../../../core/services/dialog.service';
import { ButtonComponent } from "../../../../../shared/ui/button/button.component";

@Component({
  selector: 'app-qr-code-dialog',
  imports: [QrCodeComponent, ButtonComponent],
  templateUrl: './qr-code-dialog.component.html',
  styleUrl: './qr-code-dialog.component.css'
})
export class QrCodeDialogComponent {
  dialog = inject(DialogService)
  dialogData = this.dialog.dialogData()
}
