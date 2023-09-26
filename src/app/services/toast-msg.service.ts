import { Injectable } from '@angular/core';
import * as Toastify from 'toastify-js';


@Injectable({
  providedIn: 'root'
})
export class ToastMsgService {

  constructor() { }


  Error(msg: string){
    Toastify({
      text: msg,
      position: "center",
      className: "error",
    }).showToast();
  }

  Info(msg: string){
    Toastify({
      text: msg,
      position: "center",
      className: "info",
    }).showToast();
  }

  Warning(msg: string){
    Toastify({
      text: msg,
      position: "center",
      className: "warning",
    }).showToast();
  }

  Exito(msg: string){
    Toastify({
      text: msg,
      position: "center",
      className: "success",
    }).showToast();
  }
}