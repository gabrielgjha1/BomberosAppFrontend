import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import {User,UserAuth} from '../../interfaces/usuer.intefaces'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.componets.css']
})
export class LoginComponent implements OnInit {
  error:boolean=true;
  mostrarSpinner:boolean = false;
  miFormulario:FormGroup = this.fb.group({

    email:['',Validators.required],
    password:['',Validators.required]

  });
  constructor(private fb:FormBuilder, private _AuthService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  validarDatos(campo:string){
    if (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched){

      return true

    }

  }

  login(){

    const {email,password} = this.miFormulario.value;

    this.mostrarSpinner = true;
    this._AuthService.login(email,password).subscribe(((resp:boolean)=>{


      if (resp){
        this.mostrarSpinner = false;

        this.router.navigateByUrl('request')



      } else {
        this.mostrarSpinner = false
        Swal.fire({

          icon: 'error',
          title: 'Oops...',
          text: 'Verifique su informacion o cree una cuenta!',
        })

      }

    }))


  }



}
