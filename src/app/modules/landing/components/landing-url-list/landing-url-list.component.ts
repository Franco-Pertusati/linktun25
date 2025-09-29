import { Component, inject, signal } from '@angular/core';
import { LinkService } from '../../../../core/services/link.service';
import { ShortenLink } from '../../../../core/interfaces/link';
import { LinkItemComponent } from './link-item/link-item.component';
import { enviroment } from '../../../../../enviroments/enviroment';
import { DemoLinkComponent } from "./demo-link/demo-link.component";

@Component({
  selector: 'app-landing-url-list',
  imports: [LinkItemComponent, DemoLinkComponent],
  templateUrl: './landing-url-list.component.html',
})
export class LandingUrlListComponent {
  linkService = inject(LinkService);
  demoLink: ShortenLink = {
    id: 1,
    originalUrl: 'https://www.youtube.com/',
    shortCode: 'try',
    favIcon: 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png',
    shortLink: `${enviroment.API_URL}/try`,
    createdAt: new Date,
    expiresAt: new Date
  }
}
