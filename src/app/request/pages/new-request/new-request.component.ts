import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  providers: [MessageService],
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  items: MenuItem[];

  activeIndex: number = 1;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

        this.items = [{
          label: 'Información Principal',
          routerLink: ''
      },
      {
          label: 'Información Personal',
          routerLink: 'form3'
      },
      {
          label: 'Dirección',
          routerLink: 'form4'
      },
      {
          label: 'Confirmación',
          routerLink: 'confirm'
      }
    ];

  }

}


