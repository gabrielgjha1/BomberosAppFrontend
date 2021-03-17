import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarRoleGuard implements CanActivate {
  public role: string;
  constructor(private _authService: AuthService, private router: Router) { }
  canActivate(): Observable<boolean> | boolean {

    return this._authService.validateToken().pipe(


      map((resp)=>{


       if (!resp){

         return false

       }

       else {

         if (this._authService.Usuario.role == 'user_role'){

          return false;

         }else{

          return true;


         }

       }

      })

    )}
  }

