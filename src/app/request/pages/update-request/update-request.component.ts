import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/auth/interfaces/usuer.intefaces';
import { request } from '../../interfaces/request.interfaces';
import { RequestService } from '../../services/request.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  public request:request;
  public user:User;
  mostrarValidadores:boolean = true;
  DesactivarInputs:boolean = false;
  mostrarSpinner:boolean  = true;
  MostrarSubmit:boolean = false;
  public formulario:FormGroup = this.fb.group({

    type_edification:['',[Validators.required]],
    areas_demolishions:[,[Validators.required,Validators.min(1)]],
    number_levels:[,[Validators.required,Validators.min(1)]],
    type_material:['',[Validators.required]],
    electric_pole:['',[Validators.required]],
    value_Demolishion:[,[Validators.required,Validators.min(1)]],
    type_Energy:['',[Validators.required]],
    Contruccion_disable:['',[Validators.required]],
    address:['',[Validators.required]],
    contruction_company: ['', Validators.required],


  });

  constructor(private router:Router, private activateRouter:ActivatedRoute,private RequestService:RequestService,public fb:FormBuilder) { }

  ngOnInit(): void {


    this.ValidarUrl();

  }




  public ValidarUrl(){

    if(this.router.url.includes('UpdateStatusRequest')){
      this.formulario.disable();

      this.TraerDatos();

    }else if (this.router.url.includes('UpdateRequest')){


      this.mostrarValidadores = false;
      this.MostrarSubmit = true;
      this.TraerDatos();

    }

  }

  public TraerDatos(){

    this.activateRouter.params.pipe(

      switchMap(({id})=>this.RequestService.TraerUnUsuario(id))

    )
    .subscribe((resp)=>{

      this.request = resp;
      this.user = resp.user;
      this.mostrarSpinner = false;

      this.AsignarValores(this.request);

    })

  }




//Usuario actualiza su informacion

public EnviarFormulario(){


  Swal.fire({
    title: 'ESta seguro que desea actualizar la información?',
    text: "El administrador tendra que revisarlo de nuevo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Actualizar!'
  }).then((result) => {

    if (result.isConfirmed) {


      this.mostrarSpinner = true;

      if (this.formulario.valid){

        this.RequestService.ActualizarRequest(this.formulario.value,this.request.id).subscribe(resp=>{


          this.mostrarSpinner = false;


          Swal.fire(
            'Actualizado!',
            'Da click para continuar!',
            'success'
          )

          this.TraerDatos();

        },(resp=>{

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error, intentalo mas tarde!',
            footer: '<a href>Why do I have this issue?</a>'
          })

        }))

      }

    }

  })

}

//Usuario actualiza su informacion

/// Administrador acepta  o rechaza un proyecto


  AceptarProyecto(status:string,id:number){

    Swal.fire({
      title: 'Esta seguro que desea actualizar el proyecto?',
      text: "Despues de aceptado los pagos se procesaran!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Aceptar Proyectos!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.mostrarSpinner = true;
        this.RequestService.UpdateStatus(status,id).subscribe(resp=>{
          this.request = resp
          this.mostrarSpinner = false;
          Swal.fire(
            'Buen trabajo!',
            'El proyecto se a aceptado!',
            'success'
          )

        },(error)=>{

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error, consulta con el administrador!',
          })

        })

      }
    })



  }

  RechazarProyecto(status:string,id:number){

    Swal.fire({
      title: 'Esta seguro que desea actualizar este proyecto?',
      text: "Despues de esto el usuario puede modificar los campos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, rechazar !'
    }).then((result) => {
      if (result.isConfirmed) {


    this.RequestService.UpdateStatus(status,id).subscribe(resp=>{
      this.request = resp

      Swal.fire(
        'Buen trabajo!',
        'Proyecto rechazado.',
        'success'
      )

    },(error)=>{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error, consulta con el administrador!',
      })

    })


      }
    })


  }


  comprobarStatusAceptar(){

    if (this.request.status ==="accepted"){

      // this.TraerDatos();
      return true;

    }

    return false;

  }

  comprobarStatusRechazar(){


    if (this.request.status ==="rejected" ){

      return true;


    }

    return false;

  }




  /// Administrador acepta  o rechaza un proyecto



  AsignarValores(request:request){

    this.formulario.reset({

      type_edification:  request.type_edification,
      areas_demolishions:  request.areas_demolishions,
      number_levels:  request.number_levels,
      type_material:  request.type_material,
      electric_pole:  request.electric_pole,
      value_Demolishion:  request.value_Demolishion,
      type_Energy:  request.type_Energy,
      Contruccion_disable:  request.Contruccion_disable,
      address:request.address,
      contruction_company:request.contruction_company,


    });


  }

  ValidarCampo(campo:string){

    return this.formulario.controls[campo].invalid  &&  this.formulario.controls[campo].touched;

  }

}
