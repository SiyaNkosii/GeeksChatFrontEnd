import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginResponse, UserLoginRequest } from 'src/app/auth.model'; // Import UserLoginRequest from auth model

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;
  registrationSuccess: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    const loginRequest: UserLoginRequest = { email: this.email, password: this.password };
    this.userService.login(loginRequest).subscribe(
      (response: LoginResponse) => {
        if (response.success) {
          this.registrationSuccess = true;
          this.loginError = false;
          console.log(`Successfully logged in as ${response.username}`);
          this.router.navigate(['/register']);
        } else {
          this.registrationSuccess = false;
          this.loginError = true;
        }
      },
      (error) => {
        console.error('Error during login', error);
        this.registrationSuccess = false;
        this.loginError = true;
      }
    );
  }
}