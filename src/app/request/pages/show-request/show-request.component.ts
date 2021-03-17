import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from '../../interfaces/request.interfaces';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {
  products = [];
  request:request[];
  mostrarSpinner:boolean=true;
  constructor(private RequestService:RequestService,private router:Router) { }

  ngOnInit(): void {

    this.TraerSolicitudes();

  }


  public TraerSolicitudes(){


    this.RequestService.ListarSolicitudUsuario().subscribe((resp:request[])=>{

      this.request = resp;
      this.mostrarSpinner = false;

    })

  }

  public EliminarRequest(id:string) {

    this.RequestService.EliminarUnaSolicitud(id).subscribe((res)=>{

      this.TraerSolicitudes();

    });

  }

  public Actualizar(id:string){

    this.router.navigateByUrl('request/administrativa/UpdateRequest/'+id);

  }

}
