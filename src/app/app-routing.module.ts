import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarLoginGuard } from './guard/validar-login.guard';
import { ValidarRoleGuard } from './guard/validar-role.guard';
import { ValidarTokenGuard } from './guard/validar-token.guard';
import { InicioComponent } from './inicio/inicio/inicio.component';


const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {

    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule),
    canActivate:[ValidarLoginGuard]

  },

  {

    path:'dashboard',
    loadChildren:()=>import('./protected/protected.module').then(m=>m.ProtectedModule)

  },
  {

    path:'request',
    loadChildren:()=>import('./request/request.module').then(m=>m.RequestModule)


  },
  {
    path:'payment',
    loadChildren:()=>import('./payment/payment.module').then(m=>m.PaymentModule)
  },

  {
    path:'**',
    redirectTo:'auth'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
