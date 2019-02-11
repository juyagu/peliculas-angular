import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  //private subject = new Subject<any>();
  private mensaje = new BehaviorSubject('');

  enviarMensaje(mensaje:string){
    this.mensaje.next(mensaje);
  }

  limpiarMensaje(){
    this.mensaje.next('');
  }

  getMensaje(): Observable<any>{
    //return this.subject.asObservable();
    return this.mensaje.asObservable();
  }

  constructor() { }
}
