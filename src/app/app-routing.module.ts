import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },  // Default redirection
  { path: '**', redirectTo: '/signup' }  // Wildcard route for invalid URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
