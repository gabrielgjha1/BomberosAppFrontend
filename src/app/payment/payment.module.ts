import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { ShowPaymentComponent } from './pages/show-payment/show-payment.component';
import { ShowAllPaymentComponent } from './pages/show-all-payment/show-all-payment.component';
import { NewpayComponent } from './pages/newpay/newpay.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CambiarnombrePipe } from './pipes/cambiarnombre.pipe';



@NgModule({
  declarations: [ShowPaymentComponent, ShowAllPaymentComponent, NewpayComponent, CambiarnombrePipe],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    PrimeNgModule
  ]
})
export class PaymentModule { }
