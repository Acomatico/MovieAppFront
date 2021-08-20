import { Injectable } from '@angular/core'
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }


  canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot) {
    if (this.authService && this.authService.authInfo) {
      const token = this.authService.authInfo.token;

      if (token) return true;
    }
    this.router.navigate(['/'])

    return false
  }
}