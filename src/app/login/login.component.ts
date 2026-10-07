import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  passwordVisible = false;

  constructor(private readonly router: Router) {}

  signIn(): void {
    if (this.username.trim() && this.password) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
