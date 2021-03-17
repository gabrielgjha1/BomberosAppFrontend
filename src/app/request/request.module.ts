import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { ShowAllRequestComponent } from './pages/show-all-request/show-all-request.component';
import { StartComponent } from './pages/start/start.component';
import { NewRequestComponent } from './pages/new-request/new-request.component';
import { UpdateRequestComponent } from './pages/update-request/update-request.component';
import { ShowRequestComponent } from './pages/show-request/show-request.component';
import { NewRequest2Component } from './pages/new-request2/new-request2.component';
import { NewRequest3Component } from './pages/new-request3/new-request3.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NewRequest4Component } from './pages/new-request4/new-request4.component';
import { ConfirmRequestComponent } from './pages/confirm-request/confirm-request.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CambiarnombrePipe } from './pipes/cambiarnombre.pipe';

@NgModule({
  declarations: [ShowAllRequestComponent, StartComponent, NewRequestComponent, UpdateRequestComponent, ShowRequestComponent, NewRequest2Component, NewRequest3Component, NewRequest4Component, ConfirmRequestComponent, CambiarnombrePipe  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class RequestModule { }
