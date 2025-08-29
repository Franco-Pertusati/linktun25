import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginComponent } from "./pages/login/login.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'sign-in', component: LoginComponent },
      { path: 'sign-up', component: RegisterComponent },
      { path: '', redirectTo: 'sign-up', pathMatch: 'full' }
    ]
  }
];
