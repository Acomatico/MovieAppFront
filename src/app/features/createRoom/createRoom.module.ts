import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CreateRoomComponent } from "./createRoom.component";

const routes: Routes = [
    {
        path: '',
        component: CreateRoomComponent
    }
]

@NgModule({
    declarations: [CreateRoomComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [CreateRoomComponent]
})

export class CreateRoomModule {}