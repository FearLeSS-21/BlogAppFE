import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet, // Include RouterOutlet if routing is used

  ]
})
export class AppComponent {
  title = 'my-angular-app';
}
