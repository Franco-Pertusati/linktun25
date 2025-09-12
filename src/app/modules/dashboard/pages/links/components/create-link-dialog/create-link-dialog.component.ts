import { Component, inject } from '@angular/core';
import { LinkService } from '../../../../../../core/services/link.service';
import { ButtonComponent } from "../../../../../../shared/ui/button/button.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationStatus } from '../../../../../../core/interfaces/operationStatus';
import { DialogService } from '../../../../../../core/services/dialog.service';
import { ButtonPromiseComponent } from "../../../../../../shared/ui/button-promise/button-promise.component";
import { ToastService } from '../../../../../../core/services/toast.service';

@Component({
  selector: 'app-create-link-dialog',
  imports: [ReactiveFormsModule, ButtonPromiseComponent],
  templateUrl: './create-link-dialog.component.html',
  styleUrl: './create-link-dialog.component.css'
})
export class CreateLinkDialogComponent {
  fb = inject(FormBuilder)
  linkService = inject(LinkService)
  dialog = inject(DialogService)
  toast = inject(ToastService)

  shortenState: OperationStatus = 'default'

  newLinkForm = this.fb.group({
    originalUrl: ['', [Validators.required]],
    expirationDate: ['', [Validators.required]]
  })

  async onSubmit() {
    if (this.newLinkForm.valid) {
      this.shortenState = 'loading';
      const { originalUrl, expirationDate } = this.newLinkForm.getRawValue();
      const parsedDate = new Date(expirationDate!);
      try {
        await this.linkService.shorten(originalUrl!, parsedDate)
        this.shortenState = 'success';
        this.toast.success('URL shortened successfully');
        window.location.reload();
      } catch (error) {
        this.shortenState = 'error';
        this.toast.error('Failed to shorten URL');
        console.error(error);
      }
    }
  }

  closeDialog() {
    this.dialog.closeDialog()
  }
}
