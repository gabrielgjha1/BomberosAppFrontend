import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarnombre'
})
export class CambiarnombrePipe implements PipeTransform {

  transform(value: string,): string {

    if (value ==="pending"){

      return "Pendiente";


    }else{

      return "Pagado";


    }

  }

}
