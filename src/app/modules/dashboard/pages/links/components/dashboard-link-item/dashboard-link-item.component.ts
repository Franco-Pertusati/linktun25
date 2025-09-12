import { Component, inject, input } from '@angular/core';
import { ShortenLink } from '../../../../../../core/interfaces/link';
import { ButtonCopyComponent } from "../../../../../../shared/ui/button-copy/button-copy.component";
import { enviroment } from '../../../../../../../enviroments/enviroment';
import { QrCodeDialogComponent } from '../../../../../landing/components/landing-url-list/qr-code-dialog/qr-code-dialog.component';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { ButtonComponent } from "../../../../../../shared/ui/button/button.component";

@Component({
  selector: 'app-dashboard-link-item',
  imports: [ButtonCopyComponent, ButtonComponent],
  templateUrl: './dashboard-link-item.component.html',
  styleUrl: './dashboard-link-item.component.css'
})
export class DashboardLinkItemComponent {
  link = input.required<ShortenLink>()
  linkTunUrl = enviroment.API_URL
  noProtocolUrl = ''
  dialog = inject(DialogService)

  ngOnInit() {
    this.noProtocolUrl = this.reomoveLinkScheme(`${this.linkTunUrl}/${this.link().shortCode}`);
  }

  openQrDialog() {
    this.dialog.openDialog(QrCodeDialogComponent, this.noProtocolUrl)
  }

  reomoveLinkScheme(link: string) {
    return link.replace(/^https?:\/\//, '');
  }
}
