import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { JWTInterceptor } from "./interceptors/jwt.interceptor";

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
    ]
})

export class CoreModule {}