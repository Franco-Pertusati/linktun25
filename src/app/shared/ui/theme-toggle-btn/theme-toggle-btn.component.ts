import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle-btn',
  imports: [ButtonComponent],
  templateUrl: './theme-toggle-btn.component.html',
  styleUrl: './theme-toggle-btn.component.css'
})
export class ThemeToggleBtnComponent {
  theme = inject(ThemeService)

  extraCss = input<string>('')

  toggleTheme() {
    this.theme.toggleTheme()
  }
}
