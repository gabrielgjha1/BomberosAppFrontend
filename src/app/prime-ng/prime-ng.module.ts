import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import {CarouselModule} from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    RippleModule,
    StepsModule,
    ToastModule,
    RadioButtonModule,
    FileUploadModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    TagModule,
    CarouselModule,
    MessageModule,
    MessagesModule

  ]
})
export class PrimeNgModule { }
