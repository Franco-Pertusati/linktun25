import { Component, inject, signal } from '@angular/core';
import { LinkItemComponent } from "./link-item/link-item.component";
import { LinkService } from '../../../../core/services/link.service';
import { ShortenLink } from '../../../../core/interfaces/link';

@Component({
  selector: 'app-landing-url-list',
  imports: [LinkItemComponent],
  templateUrl: './landing-url-list.component.html',
})
export class LandingUrlListComponent {
  linkService = inject(LinkService);
}
