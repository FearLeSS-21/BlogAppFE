import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  private loginUrl = 'http://localhost:8080/users/login'; // URL for login

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const payload = { email: this.email, password: this.password };

    this.http.post<any>(this.loginUrl, payload).subscribe({
      next: (response) => {
        console.log(response); // Log the response to understand its structure

        if (response && response.email) { // Assuming successful response contains the email or other user details
          // Navigate to home page on successful login
          this.router.navigate(['/']);
        } else {
          // Display error message from backend
          const errorMessage = response?.message || 'Invalid credentials';
          alert(errorMessage);
        }
      },
      error: (err) => {
        // Handle error case
        console.error('Login failed:', err);
        alert('Login failed. Please check your network connection and try again.');
      }
    });
  }
}
