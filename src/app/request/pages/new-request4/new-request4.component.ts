import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { request } from '../../interfaces/request.interfaces';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-new-request4',
  templateUrl: './new-request4.component.html',
  styleUrls: ['./new-request4.component.css']
})
export class NewRequest4Component implements OnInit {
  request:request = {};

  thecnical_resolution:File = null;
  error:boolean = false;
  miformulario: FormGroup = this.fb.group({

    address: ['', [Validators.required]],
    contruction_company: ['', Validators.required],

  });

  constructor(private router: Router, private fb: FormBuilder,private RequestService:RequestService) { }

  ngOnInit(): void {


    if (!this.RequestService.informacionprincipal && !this.RequestService.informacionpersonal ){

      this.router.navigateByUrl('request')


    }

    if ( this.RequestService.direccion ){



      this.miformulario.reset({


        address:this.RequestService.direccion.address,
        contruction_company:this.RequestService.direccion.contruction_company,


      });



    }



  }



  Thecnical_resolution(event){

    this.thecnical_resolution = event.currentFiles[0];
    this.error = false;


  }



  nextPage() {


    if (this.miformulario.invalid) {

      this.miformulario.markAllAsTouched();

      return;

    }

    if ( this.miformulario.value.contruction_company ==1 && this.thecnical_resolution ){

      this.request = {

        address               : this.miformulario.value.address,
        contruction_company   : this.miformulario.value.contruction_company,
        thecnical_resolution  : this.thecnical_resolution

      }

      this.RequestService.InformacionDireccionImagen(this.request);

      this.router.navigateByUrl('request/confirm');

      return;

    }else if ( this.miformulario.value.contruction_company ==0 ){

      this.request = {

        address               : this.miformulario.value.address,
        contruction_company   : this.miformulario.value.contruction_company,

      }
      this.RequestService.InformacionDireccion(this.request);

      this.router.navigateByUrl('request/confirm');

      return;

    }else{

      this.error = true;

    }




  }






  ValidarCampo(campo: string) {

    return this.miformulario.controls[campo].invalid && this.miformulario.controls[campo].touched;

  }

  prevPage() {
    this.router.navigateByUrl('request/form3');
  }




}
