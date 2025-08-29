import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from "../../shared/ui/button/button.component";

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarOpen: boolean = false

  sidebarBtns = [
    {
      label: 'Links',
      icon: 'link',
    },
    {
      label: 'Analytics',
      icon: 'insights',
    },
    {
      label: 'Reports',
      icon: 'bar_chart',
    },
    {
      label: 'Cutomers',
      icon: 'group',
    },
    {
      label: 'Settings',
      icon: 'settings',
    },
    {
      label: 'Tags',
      icon: 'sell',
    },
    {
      label: 'Events',
      icon: 'calendar_today',
    },
    {
      label: 'Support',
      icon: 'support_agent',
    }
  ];
}
