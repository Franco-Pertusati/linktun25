import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { ThemeToggleBtnComponent } from "../../shared/ui/theme-toggle-btn/theme-toggle-btn.component";
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, ButtonComponent, ThemeToggleBtnComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
}
