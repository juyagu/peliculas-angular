import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MensajeService } from './../servicios/mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private svcMensaje: MensajeService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('currentUser') == 'administrador'){
        return true;
      }
      this.svcMensaje.enviarMensaje("Debe ser administrador para poder realizar esta acción");
      this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
