import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class CreateRoomService {
    url = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    createRoom({code, movies}: any) {
        return this.http.post(`${this.url}/api/rooms`, {code, movies});
    }
}