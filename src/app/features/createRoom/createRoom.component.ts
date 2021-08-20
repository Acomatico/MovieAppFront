import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CreateRoomService } from "src/app/core/services/createRoom.service";

@Component({
    selector: 'create-room',
    templateUrl: './createRoom.component.html',
    styleUrls: ['./createRoom.component.css']
})

export class CreateRoomComponent {
    createRoomForm = this.fb.group({
        code: ['', [Validators.required]],
        movies: this.fb.array([])
    });

    get movies(): FormArray {
        return this.createRoomForm.get('movies') as FormArray;
    }

    newMovie(): FormGroup {
        return this.fb.group({
            title: ['', [Validators.required]],
            genre: [''],
            year: ['']
        })
    }

    addMovie() {
        this.movies.push(this.newMovie());
    }

    removeMovie(i: number) {
        this.movies.removeAt(i);
    }

    submit() {
        this.createRoomService.createRoom(this.createRoomForm.value).subscribe(() => {
            const code = this.createRoomForm.value.code;
            this.router.navigate([`/join-room/${code}`]);
        })
    }

    constructor(private fb: FormBuilder, private createRoomService: CreateRoomService, private router: Router) {}
}