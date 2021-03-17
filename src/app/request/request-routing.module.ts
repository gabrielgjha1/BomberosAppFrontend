import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarRoleGuard } from '../guard/validar-role.guard';
import { ValidarTokenGuard } from '../guard/validar-token.guard';
import { ConfirmRequestComponent } from './pages/confirm-request/confirm-request.component';
import { NewRequestComponent } from './pages/new-request/new-request.component';
import { NewRequest2Component } from './pages/new-request2/new-request2.component';
import { NewRequest3Component } from './pages/new-request3/new-request3.component';
import { NewRequest4Component } from './pages/new-request4/new-request4.component';
import { ShowAllRequestComponent } from './pages/show-all-request/show-all-request.component';
import { ShowRequestComponent } from './pages/show-request/show-request.component';
import { StartComponent } from './pages/start/start.component';
import { UpdateRequestComponent } from './pages/update-request/update-request.component';


const routes: Routes = [

  {

    path:'administrativa',
    canActivate:[ValidarTokenGuard],
    children:[

      {

        path:'',
        component:ShowRequestComponent,


      },
      {

        path:'showallrequest',
        component:ShowAllRequestComponent,
        canActivate:[ValidarRoleGuard]

      },

      {

        path:'UpdateStatusRequest/:id',
        component:UpdateRequestComponent,
        canActivate:[ValidarRoleGuard]

      },

      {

        path:'UpdateRequest/:id',
        component:UpdateRequestComponent

      },
      {

        path:'**',
        redirectTo:'showrequest'

      }

    ]

  },

  {

    path:'',
    component:NewRequestComponent,
    canActivate:[ValidarTokenGuard],
    children:[

      {

        path:'',
        component:NewRequest2Component,
      },
      {

        path:'form3',
        component:NewRequest3Component,
      },
      {

        path:'form4',
        component:NewRequest4Component,
      },
      {

        path:'confirm',
        component:ConfirmRequestComponent,
      },
      {

        path:'**',
        redirectTo:''

      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
