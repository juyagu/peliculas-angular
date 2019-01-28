import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';

import { PeliculasService } from './../../servicios/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  @Input()
  id_pelicula : number;
  
  pelicula:Pelicula;
  
  @Output()
  cancelar = new EventEmitter();
  
  constructor(private svcPelicula:PeliculasService) { }

  ngOnInit() {
	  this.buscarPelicula(this.id_pelicula);
  }
  
  cancelarEdicion(){
	  this.cancelar.emit(false);
  }
  
  guardarCambios(){
	  console.log("Datos a enviar:");
	  console.log(this.pelicula);
  }
  
  buscarPelicula(id){
	  this.svcPelicula.buscarPelicula(id)
		.subscribe(data => {
			this.pelicula = data;
		});
  }

}
