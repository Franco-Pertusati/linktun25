import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToExpiration'
})
export class MinutesToExpirationPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';

    // Obtener la fecha actual
    const now = new Date().getTime();

    // Obtener la fecha de expiración
    const expirationDate = new Date(value).getTime();

    // Calcular la diferencia en minutos
    const diffInMinutes = Math.max(0, Math.floor((expirationDate - now) / 60000)); // 60000 ms en 1 minuto

    // Si quedan minutos, muestra el número de minutos
    if (diffInMinutes > 0) {
      return `${diffInMinutes} mins`;
    } else {
      return 'Expired';
    }
  }
}
