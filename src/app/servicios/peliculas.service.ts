import { Injectable } from '@angular/core';
import { Pelicula } from '../entities/pelicula';
import { PELICULAS } from '../mock-peliculas';

import { Observable,of,Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas(): Observable<Pelicula[]>{
  	return new Observable((observer:Observer<Pelicula[]>)=>{
  		observer.next(PELICULAS);
  		observer.complete(); 	
  	});
  }
  
  buscarPelicula(id:number) : Observable<Pelicula>{
	  return new Observable((observer:Observer<Pelicula>)=>{
		const result = PELICULAS.find(pelicula => pelicula.id_pelicula === id);
		observer.next(result);
		observer.complete();
	  })
  }
}
