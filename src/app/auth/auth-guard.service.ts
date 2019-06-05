import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { authService } from "./auth.service";
import {Observable} from "rxjs";
 
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private AuthService:authService, private router:Router) {}
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.AuthService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
    
        return false;
    }
}