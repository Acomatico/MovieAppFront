import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { JoinRoomComponent } from "./joinRoom.component";

const routes: Routes = [
    {
        path: '',
        component: JoinRoomComponent
    }
]

@NgModule({
    declarations: [JoinRoomComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [JoinRoomComponent]
})

export class JoinRoomModule {}