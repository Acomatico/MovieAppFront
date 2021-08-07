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
    voteForm = this.fb.group({
        approved: [false]
    });

    constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

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
            const response = JSON.parse(event.data);
            this.currentMovie = response.movie;
            console.log(this.currentMovie);

            if (response.isLast) {
                const nextButton = window.document.getElementById('nextMovieButton');
                const finishButton = window.document.getElementById('finishButton');
                if (finishButton && nextButton) {
                    finishButton.hidden = false;
                    nextButton.hidden = true;
                }
            }
        }

    }

    nextMovie() {
        const dataToSend = JSON.stringify({
            command: "nextMovie",
            approved: this.voteForm.value.approved
        });
        
        this.webSocket.send(dataToSend);
    }

    closeConnection() {
        this.nextMovie();
        this.webSocket.close();
    }

}