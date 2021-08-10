import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetRoomService } from "src/app/core/services/getRoom.service";

@Component({
    selector: 'view-room',
    templateUrl: './viewRoom.component.html',
    styleUrls: ['./viewRoom.component.css']
})

export class ViewRoomComponent implements OnInit {
    room: any;
    roomCode: any;

    constructor(private getRoomService: GetRoomService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.roomCode = this.route.snapshot.paramMap.get('roomCode');
        this.getRoomService.getRoom(this.roomCode).subscribe(room => {
            console.log(room);
            this.room = room;
        });
    }

    
}