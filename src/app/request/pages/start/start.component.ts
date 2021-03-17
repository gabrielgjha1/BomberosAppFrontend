import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UserAuth,User } from 'src/app/auth/interfaces/usuer.intefaces';
import { AuthService } from 'src/app/auth/Service/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  usuario:User
  get User(){

    return  this.usuario = this._usuarioService.Usuario;

  }

  constructor(private _usuarioService:AuthService) { }

  ngOnInit(): void {


  }

}
