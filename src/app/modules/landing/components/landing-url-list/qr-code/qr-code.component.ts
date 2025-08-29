import { Component, inject, input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode'
import { DialogService } from '../../../../../core/services/dialog.service';

@Component({
  selector: 'app-qr-code',
  imports: [QRCodeComponent],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {
  dialog = inject(DialogService)

  url = input.required<string>()
}
