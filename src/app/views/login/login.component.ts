import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup;
  @ViewChild('loginTab')
  loginTab!: ElementRef<HTMLButtonElement>;
  @ViewChild('registerTab')
  registerTab!: ElementRef<HTMLButtonElement>;
  @ViewChild('loginForm')
  loginForm!: ElementRef<HTMLFormElement>;
  @ViewChild('registerForm')
  registerForm!: ElementRef<HTMLFormElement>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.loginTab.nativeElement.onclick = () => {
      this.loginForm.nativeElement.style.display = 'block';
      this.registerForm.nativeElement.style.display = 'none';
    }

    this.registerTab.nativeElement.onclick = () => {
      this.loginForm.nativeElement.style.display = 'none';
      this.registerForm.nativeElement.style.display = 'block';
    }
  }

  login() {
    const formValue = this.form.value;

    if (formValue.email && formValue.password) {
      this.authService
        .login(formValue.email, formValue.password)
        .subscribe((response) => {
          if (response.isSuccess) {
            this.router.navigate(['/']);
          }
        });
    }
  }

  register() {
    const formValue = this.form.value;

    if (formValue.email && formValue.username && formValue.password) {
      this.authService
        .register(formValue.email, formValue.username, formValue.password)
        .subscribe((response) => {
          if (response.isSuccess) {
            this.router.navigate(['/']);
          }
        });
    }
  }
}