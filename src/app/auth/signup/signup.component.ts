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
  errorMessage = '';

  private signupUrl = 'http://localhost:8080/users/signup';

  constructor(private http: HttpClient, private router: Router) { }

  onSignup() {
    // Check for empty fields before submitting
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'All fields are required';
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    // Post request to signup 
    this.http.post(this.signupUrl, user).subscribe({
      next: () => {
        // On success, navigate to login
        this.router.navigate(['/login']);
      },
      error: (err) => {
        // Handle errors, show appropriate error message
        console.error('Signup error:', err);
        if (err.status === 409) {
          this.errorMessage = 'Email already in use';
        } else if (err.status === 400) {
          this.errorMessage = 'Invalid input: ' + err.error;
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    });
  }
}
