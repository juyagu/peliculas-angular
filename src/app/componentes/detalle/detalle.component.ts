import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  @Input()
  pelicula:Pelicula;

  @Output()
  cancelar = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  cancelarEdicion(){
	  this.cancelar.emit(false);
  }
  
  guardarCambios(){
	  console.log("Datos a enviar:");
	  console.log(this.pelicula);
  }

}
