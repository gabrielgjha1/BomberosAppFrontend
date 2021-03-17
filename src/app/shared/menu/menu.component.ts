import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/Service/auth.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  comprobar_login:boolean=false;
  mostrarSpinner:boolean = false;

  constructor( private authservice:AuthService ) {


   }



  ngOnInit(): void {
    this.validarLogin();

  }

  validarLogin() {


    this.authservice.validateToken().subscribe((resp:boolean)=>{

      var  comprobarRole ;

     if (this.authservice.Usuario.role ==='user_role'){


      comprobarRole = false


     }else if (this.authservice.Usuario.role ==='admin_role'){

      comprobarRole = true

     }else{
      comprobarRole = false



     }

      this.comprobar_login = resp;
      this.items = [
        {
          label:'Inicio',
          icon:'pi pi-fw pi-flag',
          routerLink:[''],
      },

      {
        label:'Solicitudes',
        icon:'pi pi-fw pi-file',
        items:[
            {
                label:'Nueva Solicitud',
                icon:'pi pi-fw  pi-clone',
                routerLink:['/request'],
            },
            {
                label:'Estado Solicitudes',
                icon:'pi pi-fw pi-calendar-plus',
                routerLink:['/request/administrativa'],
            },
            {
                label:'Ver Solicitudes',
                icon:'pi pi-fw pi-search',
                routerLink:['/request/administrativa/showallrequest'],
                visible:comprobarRole
            },

        ]
    },
        {
            label:'Pagos',
            icon:'pi pi-fw pi-paypal',
            items:[
                {
                    label:'Pagar Solicitudes',
                    icon:'pi pi-fw pi-money-bill',
                    routerLink:['/payment/showpayment'],
                },
                {
                    separator:true
                },
                {
                    label:'Ver Pagos',
                    icon:'pi pi-fw pi-search',
                    routerLink:['/payment/showallpayment'],
                    visible:comprobarRole

                }

            ]
        },
      {
        label:'Cuenta',
        icon:'pi pi-fw pi-user',
        visible:this.comprobar_login,
        items:[
            // {
            //     label:'Perfil',
            //     icon:'pi pi-fw pi-user',
            // },
            {
              label:'Salir',
              icon:'pi pi-fw pi-power-off',
              command:(e)=>{

                this.authservice.logout();

              }
          }
        ]
    },
    {
      label:'Iniciar Sesion',
      icon:'pi pi-fw pi-user',
      routerLink:['/auth'],
      visible:!this.comprobar_login,


  },

    ];


    this.mostrarSpinner = true;

    });

   }

}
