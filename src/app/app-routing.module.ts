import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './features/createRoom/createRoom.component';
import { CreateRoomModule } from './features/createRoom/createRoom.module';
import { JoinRoomComponent } from './features/joinRoom/joinRoom.component';
import { JoinRoomModule } from './features/joinRoom/joinRoom.module';
import { LoginComponent } from './features/login/login.component';
import { LoginModule } from './features/login/login.module';
import { RegisterComponent } from './features/register/register.component';
import { RegisterModule } from './features/register/register.module';
import { ViewRoomComponent } from './features/viewRoom/viewRoom.component';
import { ViewRoomModule } from './features/viewRoom/viewRoom.module';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-room',
    component: CreateRoomComponent
  },
  {
    path: 'join-room/:roomCode',
    component: JoinRoomComponent
  }, 
  {
    path: 'results/:roomCode',
    component: ViewRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
