import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { JoinRoomService } from "src/app/core/services/joinRoom.service";

@Component({
    selector: 'join-room',
    templateUrl: './joinRoom.component.html',
    styleUrls: ['./joinRoom.component.css']
})

export class JoinRoomComponent implements OnInit {
    code: any;
    webSocket: any;
    currentMovie: any;
    isLastMovie: boolean = false;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.code = this.route.snapshot.paramMap.get('roomCode');
        this.joinRoom(this.code);
    }

    joinRoom(roomCode: any) {
        const url = `ws://localhost:3000/rooms/${roomCode}`;

        this.webSocket = new WebSocket(url);

        this.webSocket.onerror = (event: any) => {
            console.log(event);
        }

        this.webSocket.onmessage = (event: any) => {
            console.log(event.data);
            const response = JSON.parse(event.data);
            this.currentMovie = response.movie;

            if (response.isLast) {
                this.isLastMovie = true
            }
        }

    }

    nextMovie(isApproved: boolean) {
        console.log(isApproved);
        console.log(this.isLastMovie);
        const jwt = JSON.parse(localStorage.getItem('auth') ?? '').token;

        const dataToSend = JSON.stringify({
            authorization: jwt,
            command: "nextMovie",
            approved: isApproved
        });
        
        this.webSocket.send(dataToSend);

        if (this.isLastMovie) {
            this.webSocket.close();
        }
    }

}