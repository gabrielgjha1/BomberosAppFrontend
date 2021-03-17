import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface proyectos {
  Nombre:string
  direccion?:  string;
  img?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  responsiveOptions
  product:proyectos[] = [

    {

      Nombre:"Camiones Mordernos",
      direccion:"Panama",
      img:"https://www.panamaamerica.com.pa/sites/default/files/imagenes/2020/03/02/cuerpo_de_bomberos.jpg",
    },

    {

      Nombre:"Nuevos Uniformes",
      direccion:"Panama",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrkvNZMepJFgVH0wMaBj0s-WD1u77DK3lew&usqp=CAU"
    },

    {

      Nombre:"Nueva Estacion",
      direccion:"Panama",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWY3Xkn1SMfTsjSvst2K8CWlb3wqAqwuf9Jw&usqp=CAU"
    },

  ];
  constructor(private router:Router) { }

  ngOnInit(): void {


    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];



  }

  registro(){

    this.router.navigateByUrl('/auth')

  }

}
