import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { CreateRoomComponent } from './features/createRoom/createRoom.component';
import { CreateRoomModule } from './features/createRoom/createRoom.module';
import { HomeComponent } from './features/home/home.component';
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
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
