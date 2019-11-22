import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';

//import { PeliculasService } from './../../servicios/peliculas.service';

const PELICULAS: Pelicula[] = [
  {id_pelicula:1, titulo: 'El club de los malditos',genero:'comedia/accion',director:'Nicanor Loreti',foto:'assets/img/malditos.jpg'},
  {id_pelicula:2, titulo: 'The Story of Ferdinand',genero:'Familiar/animacion',director:'Carlos Saldaña',foto:'assets/img/ferdinand.jpg'},
  {id_pelicula:3, titulo: 'Pendular',genero:'Drama',director:'Julia Murrat',foto:'assets/img/pendular.jpg'}
]

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas:Pelicula[] = PELICULAS;
  //peliculas:Pelicula[];
  peliculaSeleccionada:number;
  constructor() { }

  ngOnInit() {
  }

  editarPelicula(id:number){
    this.peliculaSeleccionada = id;
  }
  
  cancelarEdicion(estado){
	  this.peliculaSeleccionada = estado;
  }

}


/*
Los eventos son mensajes => Desde el template hacia la clase del componente => ()
Propiedades => mensajes se envían desde la clase componente hacia el template => [] 
*/