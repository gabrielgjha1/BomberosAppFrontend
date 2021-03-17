import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { request } from '../interfaces/request.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public informacionprincipal:request;
  public informacionpersonal:request;
  public direccion:request;

  constructor(private http:HttpClient) { }


  public asignarValorPrincipal(informacionPersonal:request){


    this.informacionprincipal = {

      type_edification:  informacionPersonal.type_edification ,
      areas_demolishions:  informacionPersonal.areas_demolishions ,
      number_levels:  informacionPersonal.number_levels ,
      type_material:  informacionPersonal.type_material ,
      electric_pole:  informacionPersonal.electric_pole ,
      value_Demolishion:  informacionPersonal.value_Demolishion ,
      type_Energy:  informacionPersonal.type_Energy ,
      Contruccion_disable:  informacionPersonal.Contruccion_disable ,

    }

  }


  public InformacionPersonal(informacionPersonal:request){

    this.informacionpersonal = {

      paz_save:informacionPersonal.paz_save,
      approval:informacionPersonal.approval,

    }

  }


  public InformacionDireccionImagen(informacionPersonal:request){

    this.direccion = {

      address: informacionPersonal.address ,
      contruction_company: informacionPersonal.contruction_company ,
      thecnical_resolution: informacionPersonal.thecnical_resolution ,

    }


  }


  public InformacionDireccion(informacionPersonal:request){

    this.direccion = {


      address: informacionPersonal.address ,
      contruction_company: informacionPersonal.contruction_company ,



    }


  }


  public GuardarRequest(request:request){

    var formdata =  new FormData();;

    formdata.append('type_edification',request.type_edification);
    formdata.append('areas_demolishions',request.areas_demolishions.toString());
    formdata.append('type_material',request.type_material);
    formdata.append('electric_pole',request.electric_pole);
    formdata.append('value_Demolishion',request.value_Demolishion.toString());
    formdata.append('number_levels',request.number_levels.toString());
    formdata.append('type_Energy',request.type_Energy.toString());
    formdata.append('Contruccion_disable',request.Contruccion_disable.toString());
    formdata.append('address',request.address);
    formdata.append('contruction_company', request.contruction_company.toString());
    formdata.append('paz_save',request.paz_save);
    formdata.append('approval',request.approval);

    if ( request.thecnical_resolution ){

      formdata.append('thecnical_resolution',request.thecnical_resolution );
    }





    const url = environment.http+'/auth/request';


    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })


   return this.http.post<Boolean>(url,formdata,{headers:headers}).pipe(

    map( resp=> true ),

    catchError( error => of(false) )

   )

  }


  public ListarSolicitudUsuario  (){

    const url = environment.http+'/auth/request/show';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })


    return  this.http.get<request>(url,{headers:headers}).pipe(


      map((resp:any) => resp.data )


    )


  }


  public ListarTodasSolicitudesUsuarios(){

    const url = environment.http+'/auth/request';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.get<request[]>(url,{headers}).pipe(


      map((resp:any) => resp.data )


    );

  }

  public TraerUnUsuario(id:string){

    const url = environment.http+'/auth/showOne/'+id;

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })

    return this.http.get<request>(url,{headers}).pipe(


      map ( (resp:any) => resp.data)


    )

  }


  public ActualizarRequest(request:request,id:number){
    const url = environment.http+'/auth/request/'+id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.put<request>(url,request,{headers});
  }


  public EliminarUnaSolicitud(id:string){

    const url = environment.http+'/auth/request/deleteOne/'+id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.delete(url,{headers:headers});

  }


  public UpdateStatus(status:string,id:number){



    const url = `${environment.http}/auth/request/${id}/${status}` ;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });


    return this.http.put<request>(url,{},{headers}).pipe(

      map((resp:any)=>resp.prueba)

    )

  }







}
