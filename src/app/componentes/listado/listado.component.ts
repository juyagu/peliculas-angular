import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';
import { Subscription } from 'rxjs';
import { PeliculasService } from './../../servicios/peliculas.service';
import { MensajeService } from './../../servicios/mensaje.service';
import { Router } from '@angular/router';


/*const PELICULAS: Pelicula[] = [
  {id_pelicula:1, titulo: 'El club de los malditos',genero:'comedia/accion',director:'Nicanor Loreti',foto:'assets/img/malditos.jpg'},
  {id_pelicula:2, titulo: 'The Story of Ferdinand',genero:'Familiar/animacion',director:'Carlos Saldaña',foto:'assets/img/ferdinand.jpg'},
  {id_pelicula:3, titulo: 'Pendular',genero:'Drama',director:'Julia Murrat',foto:'assets/img/pendular.jpg'}
]*/

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //peliculas:Pelicula[] = PELICULAS;
  peliculas:Pelicula[];
  peliculaSeleccionada:number;
  mensaje:string;
  constructor(private svcPelicula:PeliculasService,private svcMensaje:MensajeService,private router:Router) { 
    
  }

  ngOnInit() {
    this.svcMensaje.getMensaje().subscribe(mensaje => this.mensaje = mensaje);
	  this.obtenerListado();
  }

  ngOnDestroy(){
    this.svcMensaje.limpiarMensaje();
  }

  editarPelicula(id:number){
    //this.peliculaSeleccionada = id;
    this.router.navigate(['/detalle/' + id]);
  }
  
  cancelarEdicion(estado){
    this.peliculaSeleccionada = estado;
  }
  
  obtenerListado(){
	  console.log(this.svcPelicula);
	  this.svcPelicula.getPeliculas()
		.subscribe(data => {
			console.log(data);
			this.peliculas = data;
		})
  }

}


/*
Los eventos son mensajes => Desde el template hacia la clase del componente => ()
Propiedades => mensajes se envían desde la clase componente hacia el template => [] 
*/