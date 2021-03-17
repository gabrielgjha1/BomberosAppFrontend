import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from '../../interfaces/request.interfaces';
import { RequestService } from '../../services/request.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})
export class ConfirmRequestComponent implements OnInit {
  request:request={};
  mostrarSpinner:boolean=false;
  constructor(private router: Router,private RequestService:RequestService) { }

  ngOnInit(): void {

    if (!this.RequestService.informacionprincipal && !this.RequestService.informacionpersonal  && !this.RequestService.direccion ){

      this.router.navigateByUrl('request')


    }

    this.request={

      type_edification: this.RequestService.informacionprincipal.type_edification  ,
      areas_demolishions: this.RequestService.informacionprincipal.areas_demolishions  ,
      type_material:   this.RequestService.informacionprincipal.type_material  ,
      electric_pole:  this.RequestService.informacionprincipal.electric_pole ,
      value_Demolishion: this.RequestService.informacionprincipal.value_Demolishion   ,
      number_levels: this.RequestService.informacionprincipal.number_levels  ,
      type_Energy:  this.RequestService.informacionprincipal.type_Energy ,
      Contruccion_disable: this.RequestService.informacionprincipal.Contruccion_disable  ,
      address:  this.RequestService.direccion.address  ,
      thecnical_resolution:  this.RequestService.direccion.thecnical_resolution || null ,
      contruction_company: this.RequestService.direccion.contruction_company   ,
      paz_save: this.RequestService.informacionpersonal.paz_save   ,
      approval:   this.RequestService.informacionpersonal.approval ,

    }


  }

  prevPage() {
    this.router.navigateByUrl('request/form4');
}

enviar(){

  // console.log(this.request);
  this.mostrarSpinner = true;

  this.RequestService.GuardarRequest(this.request).subscribe(resp=>{

    this.mostrarSpinner = false;
    if (resp){

      Swal.fire(
        'Solicitud Enviada!',
        'Puedes verificar el estado de tu solicitud!',
        'success'
      )

    }else{

      Swal.fire({
        icon: 'error',
        title: 'Error al registrar la solicitud',
        text: 'Prueba de nuevo dentro de un rato!',

      })

    }




  })


}
}
