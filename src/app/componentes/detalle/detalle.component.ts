import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from './../../entities/pelicula';

import { PeliculasService } from './../../servicios/peliculas.service';
import { MensajeService } from './../../servicios/mensaje.service';

import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  /*@Input()
  id : number;*/
  
  id:number;
  pelicula:Pelicula;
  nuevaPelicula:boolean = false;
  
  /*@Output()
  cancelar = new EventEmitter();*/

  @Output()
  guardar = new EventEmitter();
  
  constructor(private svcPelicula:PeliculasService,private svcMensaje: MensajeService,private route:ActivatedRoute,private router: Router) { 
    this.route.params.subscribe(params => this.id = params['id'] );
  }

  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get('id');
	 if(typeof this.id !== 'undefined'){
		this.buscarPelicula(this.id); 
	 }else{
		 this.nuevaPelicula = true;
		 this.pelicula = {id:0,titulo:'',director:'',genero:'',foto:''}
	 }
  }
  
  cancelarEdicion(){
    //this.cancelar.emit(false);
    this.router.navigate(['/home']);
  }
  
  guardarCambios(){
	  //console.log("Datos a enviar:");
    //console.log(this.pelicula);
    this.svcPelicula.modificarPelicula(this.pelicula)
      .subscribe(data => {
        console.log(data);
        this.svcMensaje.enviarMensaje('La pelicula fue modificada correctamente');
        this.router.navigate(['/home']);
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
