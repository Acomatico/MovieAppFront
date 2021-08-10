import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class GetRoomService {
    url = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    getRoom(code: string) {
        return this.http.get(`${this.url}/api/rooms/${code}`);
    }
}