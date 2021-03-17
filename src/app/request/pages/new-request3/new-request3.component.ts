import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/usuer.intefaces';
import { AuthService } from 'src/app/auth/Service/auth.service';
import { request } from '../../interfaces/request.interfaces';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-new-request3',
  templateUrl: './new-request3.component.html',
  styleUrls: ['./new-request3.component.css']
})
export class NewRequest3Component implements OnInit {
  uploadedFiles: any[] = [];
  pazandsave:File = null;
  demolishion:File = null;
  errores:boolean = false;

  request:request = {};

  get Usuario (){

    return this.authservice.user;

  }


  formulario:FormGroup = this.fb.group({



  })

  constructor(private router: Router,private authservice:AuthService,private fb:FormBuilder,private RequestService:RequestService ) {




   }

  ngOnInit(): void {

    if (!this.RequestService.informacionprincipal){

      this.router.navigateByUrl('request')


    }


  }


  nextPage() {
    this.errores = false;
    if (this.pazandsave && this.demolishion){

      this.request = {
        paz_save : this.pazandsave,
        approval : this.demolishion
      }

      this.RequestService.InformacionPersonal(this.request);

      this.router.navigateByUrl('request/form4');

      return;
    }
    this.errores = true;


  }

  prevPage() {
  this.router.navigateByUrl('request');
}




PazAndSave(event) {
  this.pazandsave = event.currentFiles[0];
}
Demolishion(event) {
  this.demolishion = event.currentFiles[0];
}



EnviarFormulario(){


}
}
