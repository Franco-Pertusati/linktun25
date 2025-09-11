import { Component, inject } from '@angular/core';
import { LinkService } from '../../../../../../core/services/link.service';
import { ButtonComponent } from "../../../../../../shared/ui/button/button.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationStatus } from '../../../../../../core/interfaces/operationStatus';

@Component({
  selector: 'app-create-link-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-link-dialog.component.html',
  styleUrl: './create-link-dialog.component.css'
})
export class CreateLinkDialogComponent {
  fb = inject(FormBuilder)
  linkService = inject(LinkService)
  shortenState: OperationStatus = 'default'

  newLinkForm = this.fb.group({
    originalUrl: ['', [Validators.required]],
    expirationDate: ['', [Validators.required]]
  })

  onSubmit() {
    if (this.newLinkForm.valid) {
      const { originalUrl, expirationDate } = this.newLinkForm.getRawValue();
      const parsedDate = new Date(expirationDate!);
      this.linkService.shorten(originalUrl!, parsedDate);
      console.log(originalUrl!, parsedDate)
    }
  }
}
