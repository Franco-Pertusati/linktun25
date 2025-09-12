import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { ThemeToggleBtnComponent } from "../../shared/ui/theme-toggle-btn/theme-toggle-btn.component";
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { DialogService } from '../../core/services/dialog.service';
import { DashboardProfileDialogComponent } from './pages/links/components/dashboard-profile-dialog/dashboard-profile-dialog.component';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, ButtonComponent, ThemeToggleBtnComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dialog = inject(DialogService)
  isSidebarOpen: boolean = false

  sidebarBtns = [
    {
      label: 'Links',
      icon: 'link',
      route: 'links'
    },
    {
      label: 'Analytics',
      icon: 'insights',
      route: 'analytics'
    },
    {
      label: 'User',
      icon: 'person',
      route: 'user'
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: 'settings'
    },
  ];

  openPorfile() {
    this.dialog.openDialog(DashboardProfileDialogComponent)
  }
}
