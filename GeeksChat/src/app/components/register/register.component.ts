import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  processing: boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(): void {
    if (!this.processing && this.registrationForm.valid) {
      this.processing = true;
      const formData = this.registrationForm.value;
  
      this.userService.registerUser(formData).subscribe(
        response => {
          this.processing = false;
          // Check if response contains the expected message property
          if (response && response.message === 'Successfully registered') {
            this.showSnackBar('Successfully registered!!', 'success');
          } else {
            console.error('Unexpected response from backend:', response);
            this.showSnackBar('Failed to register. Unexpected response.', 'error');
          }
        },
        error => {
          this.processing = false;
          console.error('Registration Error:', error);
          this.showSnackBar('Failed to register', 'error');
        }
      );
    } else {
      this.markFormGroupTouched(this.registrationForm);
      this.showSnackBar('Please fill in all fields correctly', 'error');
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }


  private showSnackBar(message: string, messageType: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: messageType === 'success' ? ['success-snackbar'] : ['error-snackbar']
    });
  }
}
