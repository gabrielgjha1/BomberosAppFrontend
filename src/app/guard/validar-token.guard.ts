import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  status:boolean;
  constructor(private _authService:AuthService, private router:Router){

  }
  canActivate():  Observable<boolean> |  boolean  {
 return this._authService.validateToken().pipe(

   tap(resp=>{

    if (!resp){
      this.router.navigateByUrl('login')

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necesitas estar registrado para realizar esta acción!',
      })
    }

   }),
   map((resp)=>{

    if (!resp){

      return false

    }

    else {

      return  true

    }

   })

 )

  }
  canLoad(): Observable<boolean> |  boolean  {
    return true;
  }
}
