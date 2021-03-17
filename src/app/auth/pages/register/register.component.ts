import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs/operators';
import { User } from '../../interfaces/usuer.intefaces';
import { AuthService } from '../../Service/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.componets.css']

})
export class RegisterComponent implements OnInit {
  usuario:User;
  passwordvalidate:boolean=false;
  mostrarSpinner:boolean = false;

  miFormulario:FormGroup = this.fb.group(


    {

      email:['Gabrielhernandez@gmail.com',[Validators.required,Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]],
      phone:['6065-0959',[Validators.required,Validators.pattern(/^\d{4}-\d{4}$/)]],
      cedula:['8-930-199',[Validators.required]],
      name:['GAbriel Hernandez',[Validators.required,Validators.minLength(2)]],
      password:['123456789',Validators.required],
      password2:['123456789',Validators.required],


    }


  )

  constructor(private fb:FormBuilder, private authService:AuthService,private Router:Router) { }

  ngOnInit(): void {
  }

  validarDatos(campo:string){

    if (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched){

      return true

    }

  }




  registro(){
    this.passwordvalidate= false;
    if (this.miFormulario.invalid){
      console.log('hola')
      this.miFormulario.markAllAsTouched();
      return;

    }

    if (this.miFormulario.value.password  != this.miFormulario.value.password2){

      this.passwordvalidate= true;
      this.miFormulario.markAllAsTouched();
      return;
    }


    this.usuario = {...this.miFormulario.value}
    console.log(this.usuario)
    this.mostrarSpinner = true;

    this.authService.Registro(this.usuario).subscribe(resp=>{

      if(resp){
        this.mostrarSpinner = false;

        Swal.fire(
          'Login con exito!',
          'AHora puedes iniciar sesión!',
          'success'
        )
        this.Router.navigateByUrl('/login')

      }else{
        this.mostrarSpinner = false;


        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'EL correo o la cedula ya estan registrados!',
        })
      }

    })
  }

}
