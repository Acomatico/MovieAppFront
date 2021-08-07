import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class JoinRoomService {
    currentMovie: any;
    webSocket: any;

    async joinRoom(roomCode: any) {
        const url = `ws://localhost:3000/rooms/${roomCode}`;

        this.webSocket = new WebSocket(url);

        this.webSocket.onerror = (event: any) => {
            console.log(event);
        }

        this.webSocket.onmessage = (event: any) => {
            this.currentMovie = event.data;
            console.log(this.currentMovie);
        }

    }

    nextMovie(approval: any) {

    }

    getCurrentMovie() {
        return this.currentMovie;
    }
}