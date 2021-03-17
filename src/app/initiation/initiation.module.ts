import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiationRoutingModule } from './initiation-routing.module';
import { InitiationComponent } from './initiation.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [InitiationComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    InitiationRoutingModule,
    BrowserAnimationsModule,
  ]
})
export class InitiationModule { }
