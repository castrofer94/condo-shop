import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'condo-shop';
  authService: AuthService;
}
