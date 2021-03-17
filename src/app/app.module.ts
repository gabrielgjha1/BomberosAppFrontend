import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AuthModule } from './auth/auth.module';
import { ProtectedModule } from './protected/protected.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentModule } from './payment/payment.module';
import { RequestModule } from './request/request.module';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ProtectedModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    PaymentModule,
    RequestModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
