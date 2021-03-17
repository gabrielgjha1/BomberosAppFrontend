import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarRoleGuard } from '../guard/validar-role.guard';
import { ValidarTokenGuard } from '../guard/validar-token.guard';
import { NewpayComponent } from './pages/newpay/newpay.component';
import { ShowAllPaymentComponent } from './pages/show-all-payment/show-all-payment.component';
import { ShowPaymentComponent } from './pages/show-payment/show-payment.component';


const routes: Routes = [{

  path:'',
  canActivate:[ValidarTokenGuard],
  children:[

    {
      path:'showpayment',
      component:ShowPaymentComponent

    },
    {
      path:'showallpayment',
      component:ShowAllPaymentComponent,
      canActivate:[ValidarRoleGuard]

    },
    {
      path:'newPayment',
      component:NewpayComponent

    },
    {

      path:'**',
      redirectTo:'showpayment'

    }


  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
