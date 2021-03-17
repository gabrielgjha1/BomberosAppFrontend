import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.components.css']

})
export class MainComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.primengConfig.ripple = true;

  }

}
