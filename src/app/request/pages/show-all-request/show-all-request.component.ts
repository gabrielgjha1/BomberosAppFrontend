import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from '../../interfaces/request.interfaces';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-show-all-request',
  templateUrl: './show-all-request.component.html',
  styleUrls: ['./show-all-request.component.css']
})
export class ShowAllRequestComponent implements OnInit {
  mostrarSpinner:boolean=true;

  request:request[] = [];

  constructor(public RequestService:RequestService, public router:Router) { }

  ngOnInit(): void {

    this.TraerDatos();

  }



  public  TraerDatos(){



    this.RequestService.ListarTodasSolicitudesUsuarios().subscribe((resp:request[])=>{


      this.mostrarSpinner = false
      this.request = resp;

    });

  }

  public VerSolicitud(id:string){

    this.router.navigateByUrl('request/administrativa/UpdateStatusRequest/'+id);
  }



}
