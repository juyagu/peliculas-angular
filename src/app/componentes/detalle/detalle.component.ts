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
  id : number;
  
  pelicula:Pelicula;
  
  @Output()
  cancelar = new EventEmitter();

  @Output()
  guardar = new EventEmitter();
  
  constructor(private svcPelicula:PeliculasService) { }

  ngOnInit() {
	  this.buscarPelicula(this.id);
  }
  
  cancelarEdicion(){
	  this.cancelar.emit(false);
  }
  
  guardarCambios(){
	  //console.log("Datos a enviar:");
    //console.log(this.pelicula);
    this.svcPelicula.modificarPelicula(this.pelicula)
      .subscribe(data => {
        console.log(data);
        this.guardar.emit(true);
      });
  }
  
  buscarPelicula(id){
	  this.svcPelicula.buscarPelicula(id)
		.subscribe(data => {
      console.log(data);
			this.pelicula = data;
		});
  }

  eliminarPelicula(id:number){
    this.svcPelicula.eliminarPelicula(id)
      .subscribe(data => {
        this.guardar.emit(true);
      })
  }

}
