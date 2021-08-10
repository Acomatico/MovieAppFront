import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ViewRoomComponent } from "./viewRoom.component";

const routes: Routes = [
    {
        path: '',
        component: ViewRoomComponent
    }
]
@NgModule({
    declarations: [ViewRoomComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [ViewRoomComponent]
})

export class ViewRoomModule {}