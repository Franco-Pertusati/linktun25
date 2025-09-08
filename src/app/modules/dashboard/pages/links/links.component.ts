import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { LinkService } from '../../../../core/services/link.service';

@Component({
  selector: 'app-links',
  imports: [ButtonComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  linkService = inject(LinkService)
  linksList = this.linkService.getLinks()
}
