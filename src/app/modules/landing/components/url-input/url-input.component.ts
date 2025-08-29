import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ToastService } from '../../../../core/services/toast.service';
import { LinkService } from '../../../../core/services/link.service';
import { ButtonPromiseComponent } from "../../../../shared/ui/button-promise/button-promise.component";
import { OperationStatus } from '../../../../core/typs/operationStatus';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.css',
  imports: [FormsModule, ButtonPromiseComponent]
})
export class UrlInputComponent {
  longUrl: string = ''
  toast = inject(ToastService)
  linkService = inject(LinkService)
  shortenState: OperationStatus = 'default'

  async shortenUrl() {
    const url = this.validateUrl(this.longUrl)
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000)

    if (!url) {
      this.toast.error('Invalid URL');
      return;
    }

    this.shortenState = 'loading';

    try {
      await this.delay(800);
      const result = await this.linkService.shorten(url, expiresAt);
      this.shortenState = 'default';
      this.toast.success('URL shortened successfully');
      this.longUrl = '';
    } catch (error) {
      this.shortenState = 'error';
      this.toast.error('Failed to shorten URL');
      console.error(error);
    }
  }

  validateUrl(input: string): string | null {
    const sanitized = input.trim();

    if (!sanitized) return null;

    const htmlPattern = /<[^>]*>/g;
    if (htmlPattern.test(sanitized)) return null;

    const sqlPattern = /('|--|;|\/\*|\*\/|xp_)/i;
    if (sqlPattern.test(sanitized)) return null;

    try {
      const url = new URL(sanitized);

      if (url.protocol !== 'https:') return null;

      const domainParts = url.hostname.split('.');
      if (domainParts.length < 2) return null;

      const tld = domainParts[domainParts.length - 1];
      if (!/^[a-z]{2,}$/i.test(tld)) return null;

      return url.toString();
    } catch (err) {
      return null;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
