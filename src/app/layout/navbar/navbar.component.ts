import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    loggedIn: boolean = false;
    joinRoomForm = this.fb.group({
        roomCode: ['']
    });
    constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

    ngOnInit() {
        if(this.authService.authInfo) {
            this.loggedIn = true;
        }
    }

    logout() {
        this.authService.logout();
        window.location.reload();
    }

    joinRoom() {
        const roomCode = this.joinRoomForm.value.roomCode;
        this.router.navigate([`./join-room/${roomCode}`])
    }
}