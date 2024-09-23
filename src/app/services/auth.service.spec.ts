import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

class MockRouter {
  navigate(commands: any[]) {}
}

describe('AuthService', () => {
  let service: AuthService;


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
