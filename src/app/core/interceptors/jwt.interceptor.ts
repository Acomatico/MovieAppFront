import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()

export class JWTInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService && this.authService.authInfo) {
            const { token } = this.authService.authInfo;
            request = request.clone({
                setHeaders: {
                    Authrorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}
