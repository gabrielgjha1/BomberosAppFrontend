import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { paymentInterface } from '../intefaces/payment.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {



  constructor(private http:HttpClient) { }


  public TraerPagosUnUsuario(){

    const url= `${environment.http}/auth/findAllPayUser`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.get<paymentInterface[]>(url,{headers}).pipe(

      map((resp:any)=>resp.data)

    )

  }

  public TraerTodosLosPagos(){

    const url= `${environment.http}/auth/payment`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.get<paymentInterface[]>(url,{headers}).pipe(

      map((resp:any)=>resp.data)

    )

  }


  public GuardarImagen(id:string,imagen:File){

    var formdata =  new FormData();
    formdata.append('img_pay',imagen);

    const url= `${environment.http}/auth/payment/${id}`;

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.post(url,formdata,{headers});

  }


}
