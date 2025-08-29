import { Component, inject } from '@angular/core'
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { DialogService } from '../../../../core/services/dialog.service'

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value
  const confirmPassword = control.get('confirmPassword')?.value
  return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  imports: [ReactiveFormsModule]
})
export class RegisterFormComponent {
  fb = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)
  dialog = inject(DialogService)

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    ]],
    confirmPassword: ['', [Validators.required]],
  }, { validators: passwordMatchValidator })


  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.getRawValue()
      this.register(username!, email!, password!)
    } else {
      this.registerForm.markAllAsTouched()
    }
  }

  async register(username: string, email: string, password: string) {
    try {
      const response = await this.authService.register(username, email, password);
      this.router.navigate(['/dashboard'])
      this.dialog.closeDialog()
      console.log(response)
    } catch (error: any) {
      console.log(error)
    }
  }
}
