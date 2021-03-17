import { Component, OnInit } from '@angular/core';
import { paymentInterface } from '../../intefaces/payment.interfaces';
import { PaymentService } from '../../services/payment.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-show-payment',
  templateUrl: './show-payment.component.html',
  styleUrls: ['./show-payment.component.css']
})
export class ShowPaymentComponent implements OnInit {
  payment:paymentInterface[];
  mostrarSpinner:boolean=true;
  constructor( private _PaymentService:PaymentService) { }

  ngOnInit(): void {

    this.TraerDatos();

  }

  public TraerDatos(){

    this._PaymentService.TraerPagosUnUsuario().subscribe((resp:paymentInterface[])=>{
      this.mostrarSpinner=false;
      this.payment = resp;

    })

  }

  public async Pago(id:string){

    const { value: file } = await Swal.fire({
      title: 'Selecciona la imagen de su comprobante de pago',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Subir imagen'
      }
    })

    if (file) {
      const reader = new FileReader()
      reader.onload =   (e) => {

        this.RealizarPago(id,file);


      }
      reader.readAsDataURL(file)
    }

  }


  public RealizarPago(id:string,imagen:File){

    this.mostrarSpinner = true;
    this._PaymentService.GuardarImagen(id,imagen).subscribe((resp)=>{

      this.mostrarSpinner = false;

      Swal.fire(
        'Buen trabajo, pago realizado!',
        'De click para continuar!',
        'success'
      )

      this.TraerDatos();

    })

  }


}
