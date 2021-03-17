import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiationComponent } from './initiation.component';


const routes: Routes = [

  {

    path:'',
    children:[
      {
        path:'',
        component:InitiationComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiationRoutingModule { }
