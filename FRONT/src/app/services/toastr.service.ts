import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class Toastr{

  // eslint-disable-next-line no-unused-vars
  constructor(private toastr:ToastrService) {
  }

  showSuccess(mensaje:string, titulo:string){
    this.toastr.success(mensaje,titulo,{
      timeOut: 4000,
      closeButton: true,
      progressBar:true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-right',
      onActivateTick: true,
    });
  }

  showError(mensaje:string, titulo:string){
    this.toastr.error(mensaje,titulo,{
      timeOut: 4000,
      closeButton: true,
      progressBar:true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      onActivateTick: true,
    });
  }

  showWarning(mensaje:string, titulo:string){
    this.toastr.warning(mensaje,titulo,{
      timeOut: 4000,
      closeButton: true,
      progressBar:true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      onActivateTick: true,
    });
  }

  showInfo(mensaje:string, titulo:string){
    this.toastr.info(mensaje,titulo,{
      timeOut: 4000,
      closeButton: true,
      progressBar:true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      onActivateTick: true,
    });
  }

}
