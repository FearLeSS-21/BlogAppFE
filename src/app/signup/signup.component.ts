import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  showDropdown: boolean = false;

  constructor(private authService: AuthService) {}

  onSignup(form: NgForm) {
    // Directly process signup since the button is disabled if the form is invalid
    this.authService.signup({ name: this.name, email: this.email, password: this.password })
      .subscribe(
        response => {
          this.successMessage = 'Signup successful!';
          this.errorMessage = '';
          form.reset();
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Signup failed: ' + error.message;
          this.successMessage = '';
        }
      );
  }

  containsUppercase(str: string): boolean {
    return /[A-Z]/.test(str);
  }

  containsLowercase(str: string): boolean {
    return /[a-z]/.test(str);
  }

  containsNumber(str: string): boolean {
    return /\d/.test(str);
  }

  containsSymbol(str: string): boolean {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
  }
}
