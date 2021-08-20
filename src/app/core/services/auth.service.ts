import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthInfo } from "../models/auth-info.model";
import { tap } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    authInfo?: AuthInfo;
    constructor(private http: HttpClient) {
        if (localStorage.getItem('auth')) {
            this.authInfo = JSON.parse(localStorage.getItem('auth') || '')
        }
    }

    login({email, password}: any) {
        const url = 'http://localhost:3000';
        return this.http
            .post(`${url}/api/users/login`, {email, password})
            .pipe(tap((info) => {
                this.authInfo = this._decodeToken(info);
                localStorage.setItem('auth', JSON.stringify(this.authInfo));
            }))
    }

    register({email, password, repeatedPassword}: any) {
        const url = 'http://localhost:3000';

        return this.http.post(`${url}/api/users/register`, {email, password, repeatedPassword})
    }

    logout() {
        localStorage.removeItem('auth');
        this.authInfo = undefined;
    }

    private _decodeToken(token: any) {
        const accessToken = token.accessToken;
        const codedInfo = accessToken.split('.')[1];
        const {uuid} = JSON.parse(atob(codedInfo));

        return {
            token: accessToken,
            uuid: uuid
        }
    }
}