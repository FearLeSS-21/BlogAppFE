import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/users/signup'; 

  constructor(private http: HttpClient) {}

  signup(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
