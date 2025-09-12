import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { LinkService } from '../../../../core/services/link.service';
import { DialogService } from '../../../../core/services/dialog.service';
import { CreateLinkDialogComponent } from './components/create-link-dialog/create-link-dialog.component';
import { ShortenLink } from '../../../../core/interfaces/link';
import { DashboardLinkItemComponent } from './components/dashboard-link-item/dashboard-link-item.component';

@Component({
  selector: 'app-links',
  imports: [ButtonComponent, DashboardLinkItemComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  dialog = inject(DialogService)
  linkService = inject(LinkService)
  linksList: ShortenLink[] = []

  async ngOnInit() {
    this.linksList = await this.linkService.getLinks();
    console.log(this.linksList)
  }

  openCreateLinkDialog() {
    this.dialog.openDialog(CreateLinkDialogComponent)
  }
}
