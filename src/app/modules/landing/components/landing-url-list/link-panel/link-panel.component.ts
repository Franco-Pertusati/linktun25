import { Component, inject } from '@angular/core';
import { ShortenLink } from '../../../../../core/interfaces/link';
import { DialogService } from '../../../../../core/services/dialog.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../../shared/ui/button/button.component";
import { ToastService } from '../../../../../core/services/toast.service';
import { QrCodeComponent } from "../qr-code/qr-code.component";

@Component({
  selector: 'app-link-panel',
  imports: [CommonModule, ButtonComponent, QrCodeComponent],
  templateUrl: './link-panel.component.html',
  styleUrl: './link-panel.component.css'
})
export class LinkPanelComponent {
  private dialog = inject(DialogService);
  private toast = inject(ToastService)

  data: any;

  ngOnInit() {
    this.data = this.dialog.dialogData().linkData;
  }

  demoAlert() {
    this.toast.createToast({ title: "This its not avaible in demo.", icon: "info" })
  }
}
