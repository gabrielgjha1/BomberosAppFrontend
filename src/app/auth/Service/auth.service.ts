import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import {environment} from '../../../environments/environment';
import { UserAuth,User } from '../interfaces/usuer.intefaces';
import {catchError, map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.http;
  public user:User;

  get Usuario (){

    return { ...this.user }

  }

  constructor(private http:HttpClient,private router:Router) { }


  public  login (email:string,password:string){


    const url = this.baseUrl+'/auth/login';
    const body = {email,password};

    return this.http.post<UserAuth>(url,body).pipe(

      tap(resp=>{
        if ( resp ){

          this.user = {
            name: resp.user.name,
            id: resp.user.id,
            cedula: resp.user.cedula,
            phone: resp.user.phone,
            email: resp.user.email,
            role:resp.user.role
         }
         localStorage.setItem('token',resp.token);
         location.reload();

        }
      }),
      map(resp=>true),
      catchError(err=>of(false))

    )


  }


  public validateToken(){

    const url = this.baseUrl+'/auth/validateToken';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')||''}`
    });

   return this.http.get<User>(url,{headers:headers}).pipe(
    tap(resp=>{
      this.user = {
        name: resp.name,
        id: resp.id,
        cedula: resp.cedula,
        phone: resp.phone,
        role:resp.role,
        email:resp.email
     }
    }),
    map(resp=>true),
    catchError(err=>of(false))

   )


  }

  public Registro(usuario:User){

    const url = this.baseUrl+'/auth/signup';

    return this.http.post(url,usuario).pipe(

      map((resp)=>true),
      catchError(error=>of(false))

    )

  }

  public logout(){

    localStorage.removeItem('token');
    this.user={};
    this.router.navigateByUrl('')
    location.reload();
  }


}
