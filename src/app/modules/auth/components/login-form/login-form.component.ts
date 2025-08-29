import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { DialogService } from '../../../../core/services/dialog.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  fb = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)
  dialog = inject(DialogService)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
    ]],
  })

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue()
      this.login(email!, password!)
    } else {
      console.log('Formulario inválido')
      this.loginForm.markAllAsTouched()
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await this.authService.login(email, password);
      this.router.navigate(['/dashboard'])
      this.dialog.closeDialog()
    } catch (error: any) {
      console.error('Error al loguear:', error);
    }
  }
}
