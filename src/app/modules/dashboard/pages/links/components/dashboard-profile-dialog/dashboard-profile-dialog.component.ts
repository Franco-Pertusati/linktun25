import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../shared/ui/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-profile-dialog',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './dashboard-profile-dialog.component.html',
  styleUrl: './dashboard-profile-dialog.component.css'
})
export class DashboardProfileDialogComponent {
  userData: any = {}

  ngOnInit() {
    const data = localStorage.getItem('userData');
    this.userData = data ? JSON.parse(data) : {};
  }
}
