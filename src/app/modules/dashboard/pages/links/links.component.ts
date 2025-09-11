import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { LinkService } from '../../../../core/services/link.service';
import { DialogService } from '../../../../core/services/dialog.service';
import { CreateLinkDialogComponent } from './components/create-link-dialog/create-link-dialog.component';
import { ShortenLink } from '../../../../core/interfaces/link';
import { LinkItemComponent } from "../../../landing/components/landing-url-list/link-item/link-item.component";

@Component({
  selector: 'app-links',
  imports: [ButtonComponent, LinkItemComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  dialog = inject(DialogService)
  linkService = inject(LinkService)
  linksList: ShortenLink[] = []

  async ngOnInit() {
    this.linksList = await this.linkService.getLinks();
  }

  openCreateLinkDialog() {
    this.dialog.openDialog(CreateLinkDialogComponent)
  }
}
