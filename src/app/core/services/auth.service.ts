import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toast = inject(ToastService)
  private apiUrl = `${enviroment.API_URL}/auth`;

  async register(username: string, email: string, password: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al registrar');
      }

      return await response.json();
    } catch (error: any) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al Loguear');
      }

      this.showSuccesToast(true)
      return await response.json();
    } catch (error: any) {
      this.showErrorToast('login', error)
      throw error;
    }
  }

  async verifyUser(): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/verify`, {
        method: 'GET',
        credentials: 'include'
      })

      if (!response) return false

      const data = await response.json();
      console.log(data)
      return data.valid === true;
    } catch (error) {
      console.log("verificaion fallida")
      return false
    }
  }

  private showErrorToast(procces: 'login' | 'register', error: Error) {
    this.toast.error(`Erorr during ${procces}`, error.message)
  }

  private showSuccesToast(firstTime: boolean) {
    this.toast.success(`Welcome ${firstTime ? 'back.' : '.'}`)
  }
}
