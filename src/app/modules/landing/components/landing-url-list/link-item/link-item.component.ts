import { Component, inject, input } from '@angular/core';
import { ShortenLink } from '../../../../../core/interfaces/link';
import { enviroment } from '../../../../../../enviroments/enviroment';
import { DialogService } from '../../../../../core/services/dialog.service';
import { LinkPanelComponent } from '../link-panel/link-panel.component';
import { QrCodeDialogComponent } from '../qr-code-dialog/qr-code-dialog.component';
import { ButtonCopyComponent } from "../../../../../shared/ui/button-copy/button-copy.component";

@Component({
  selector: 'app-link-item',
  imports: [ButtonCopyComponent],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  dialog = inject(DialogService)
  link = input.required<ShortenLink>()
  linkTunUrl = enviroment.LINKTUN_URL

  openLinkPanel() {
    this.dialog.openDialog(LinkPanelComponent, { linkData: this.link() })
    console.log(this.dialog.dialogData())
  }

  reomoveLinkScheme(link: string) {
    return link.replace(/^https?:\/\//, '');
  }

  openQrDialog() {
    this.dialog.openDialog(QrCodeDialogComponent, this.link().shortLink)
  }
}
