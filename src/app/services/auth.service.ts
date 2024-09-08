import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string, password: string, fullName: string }[] = [
    { email: 'test@example.com', password: 'password123', fullName: 'Test User' }
  ];
  private currentUser: { email: string, fullName: string } | null = null;

  constructor(private router: Router) {}

  signup(email: string, password: string, fullName: string): boolean {
    const userExists = this.users.some(user => user.email === email);
    if (!userExists) {
      this.users.push({ email, password, fullName });
      return true;
    }
    return false;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.currentUser = { email: user.email, fullName: user.fullName };
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
