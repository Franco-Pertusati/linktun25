import { Component, inject, signal } from '@angular/core';
import { GoogleAuthBtnComponent } from "../shared/google-auth-btn/google-auth-btn.component";
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"

export interface ItemForm {
  id: FormControl<number>
  name: FormControl<string>
  value: FormControl<string>
}

export type CustomFormGroup = FormGroup<ItemForm>

@Component({
  selector: 'app-login',
  imports: [GoogleAuthBtnComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css'
})
export class LoginComponent {
  fb = inject(NonNullableFormBuilder)

  form: FormGroup<{ items: FormArray<CustomFormGroup> }> = this.fb.group({
    items: this.fb.array<CustomFormGroup>([])
  })

  items = signal(this.form.controls.items.controls)

  addItem() {
    const id = this.items().length + 1
    const itmeForm = this.fb.group<ItemForm>({
      id: this.fb.control(id),
      name: this.fb.control("", { validators: [Validators.required] }),
      value: this.fb.control("", { validators: [Validators.required] })
    })

    this.form.controls.items.push(itmeForm)

    this.items.set([... this.form.controls.items.controls])
  }
}
