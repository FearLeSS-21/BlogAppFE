import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true, 
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    CommonModule 
  ]
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']); // Redirect to home or login page after logout
  }
}
