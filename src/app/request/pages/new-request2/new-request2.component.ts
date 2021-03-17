import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-new-request2',
  templateUrl: './new-request2.component.html',
  styleUrls: ['./new-request2.component.css']
})
export class NewRequest2Component implements OnInit {


  public formulario:FormGroup = this.fb.group({

    type_edification:['',[Validators.required]],
    areas_demolishions:[,[Validators.required,Validators.min(1)]],
    number_levels:[,[Validators.required,Validators.min(1)]],
    type_material:['',[Validators.required]],
    electric_pole:['',[Validators.required]],
    value_Demolishion:[,[Validators.required,Validators.min(1)]],
    type_Energy:['',[Validators.required]],
    Contruccion_disable:['',[Validators.required]],

  });

  constructor(private router: Router, private fb:FormBuilder,private RequestService:RequestService) { }

  ngOnInit(): void {


    if ( this.RequestService.informacionprincipal ){



      this.formulario.reset({

        type_edification:  this.RequestService.informacionprincipal.type_edification,
        areas_demolishions:  this.RequestService.informacionprincipal.areas_demolishions,
        number_levels:  this.RequestService.informacionprincipal.number_levels,
        type_material:  this.RequestService.informacionprincipal.type_material,
        electric_pole:  this.RequestService.informacionprincipal.electric_pole,
        value_Demolishion:  this.RequestService.informacionprincipal.value_Demolishion,
        type_Energy:  this.RequestService.informacionprincipal.type_Energy,
        Contruccion_disable:  this.RequestService.informacionprincipal.Contruccion_disable,



      });


  }
  }


  ValidarCampo(campo:string){

    return this.formulario.controls[campo].invalid  &&  this.formulario.controls[campo].touched;

  }

  nextPage(){


    if (this.formulario.invalid){

      this.formulario.markAllAsTouched();
      return
    }

    this.RequestService.asignarValorPrincipal(this.formulario.value);
    this.router.navigateByUrl('request/form3');
    return



  }

  EnviarFormulario(){


  }


}
