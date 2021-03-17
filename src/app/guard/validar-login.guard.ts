import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarLoginGuard implements CanActivate {

  constructor(private router:Router,private _authService:AuthService){

  }

  canActivate():  Observable<boolean> |  boolean  {
    return this._authService.validateToken().pipe(

      tap(resp=>{
       if (resp){ this.router.navigateByUrl('')  }

      }),
      map((resp)=> {

        if ( resp){

          return false
        }
        return true


      } )
    )

     }

}
