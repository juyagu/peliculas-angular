import { Injectable } from '@angular/core';
import { Pelicula } from '../entities/pelicula';
/*import { PELICULAS } from '../mock-peliculas';*/
import { Observable,of,Observer } from 'rxjs';

/* ------------- Clase 4 ------ */
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
/* ------------ FIN ------------ */

import { environment } from './../../environments/environment';
//import { url } from 'inspector';


/* Declaración httpOptions*/
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
/* ----------------------------- */

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  url:string = environment.url;
  constructor(private http:HttpClient) { }

  /*getPeliculas(): Observable<Pelicula[]>{
  	return new Observable((observer:Observer<Pelicula[]>)=>{
  		observer.next(PELICULAS);
  		observer.complete(); 	
  	});
  }*/

  getPeliculas(): Observable<Pelicula[]>{
    //return this.http.get<Pelicula[]>("http://localhost:3001/angular5/peliculas");
    return this.http.get<Pelicula[]>(this.url);
  }
  
  /*buscarPelicula(id:number) : Observable<Pelicula>{
	  return new Observable((observer:Observer<Pelicula>)=>{
		const result = PELICULAS.find(pelicula => pelicula.id_pelicula === id);
		observer.next(result);
		observer.complete();
	  })
  }*/
  buscarPelicula(id:number): Observable<Pelicula>{
    return this.http.get<Pelicula>(this.url + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  modificarPelicula(pelicula:Pelicula):Observable<any>{
    return this.http.put<any>(this.url  + pelicula.id,pelicula,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocurrió un error: ', error.error.message);
    }else{
      console.error(`El backend retornó el código ${error.status}, El cuerpo del mensaje de error es: ${error.message}`);
    }
    return throwError('Algo malo sucedió; por favor intente más tarde');
  }
}
