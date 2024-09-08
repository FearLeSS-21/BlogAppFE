import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  private signupUrl = 'http://localhost:8080/users/signup';

  constructor(private http: HttpClient, private router: Router) { }

  onSignup() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post(this.signupUrl, user).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup error:', err);
        alert('User already exists or there was an error');
      }
    });
  }
}
