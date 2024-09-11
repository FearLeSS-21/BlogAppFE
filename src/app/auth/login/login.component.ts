import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  private apiUrl = 'http://localhost:8080/users/login'; // Adjust the URL as needed

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>(this.apiUrl, body, { headers })
      .subscribe(
        response => {
          if (response && response.message === 'Login successful') {
            this.router.navigate(['/']); // Redirect to home page
          } else {
            alert('Invalid credentials');
          }
        },
        error => {
          alert('Invalid credentials');
        }
      );
  }
}
