import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { paymentInterface } from '../../intefaces/payment.interfaces';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-show-all-payment',
  templateUrl: './show-all-payment.component.html',
  styleUrls: ['./show-all-payment.component.css']
})
export class ShowAllPaymentComponent implements OnInit {
  payment:paymentInterface[];
  mostrarSpinner:boolean=true;
  constructor( private _PaymentService:PaymentService) { }

  ngOnInit(): void {

    this.TraerDatos();
  }

  public TraerDatos(){

    this._PaymentService.TraerTodosLosPagos().subscribe((resp:paymentInterface[])=>{
      this.mostrarSpinner=false;
      this.payment = resp;

    })

  }

  public VerPago(id:string){

    Swal.fire({
      title: 'Pago!',
      text: 'Pago Realizado.',
      imageUrl: id,
      imageWidth: 600,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

  }

}
