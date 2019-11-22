import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validadorEmail } from './validadorEmail';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Se cargó el documento");
  }

  registroForm = new FormGroup({
    nombre: new FormControl('Pedrito',[Validators.required, Validators.minLength(5),Validators.maxLength(30)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(30)]),
    email: new FormControl('',[Validators.required,validadorEmail(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)])
  });

  formularioEnviado(){
    console.log(this.registroForm.value);
  }

  captureErrors(errors){
    console.log(errors);
  }
}
