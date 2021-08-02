import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    registerForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        repeatedPassword: ['', [Validators.required]]
    })

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    register() {
        if (!this.registerForm.valid) {
            return;
        }

        return this.authService.register(this.registerForm.value).subscribe(() => {
            this.registerForm.reset();
        })
    }
}