import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarnombre'
})
export class CambiarnombrePipe implements PipeTransform {

  transform(value: string, ): unknown {

    if (value === 'rejected'){

      return "Rechazado";


    }

    if (value === 'wait'){

      return "En Espera";


    }

    if (value === 'accepted'){

      return "aceptado";


    }

  }

}
