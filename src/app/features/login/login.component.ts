import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    return this.authService.login(this.loginForm.value).subscribe(() => {
        this.loginForm.reset();
    })
  }

}
