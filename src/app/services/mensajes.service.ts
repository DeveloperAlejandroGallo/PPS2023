import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  Info(msg: string) {
    Swal.fire({
      title: 'Información',
      text: msg,
      icon: 'info',
      heightAuto:false
    });
  }


  Exito(msg: string) {
    Swal.fire({
      title: 'Éxito',
      text: msg,
      icon: 'success',
      heightAuto:false
    });
  }

  Warning(msg: string) {
    Swal.fire({
      title: 'Advertencia!',
      text: msg,
      icon: 'warning',
      heightAuto:false
    });
  }

  Error(msg: string) {
    Swal.fire({
      title: 'Error',
      text: msg,
      icon: 'error',
      heightAuto:false
    });
  }

}
