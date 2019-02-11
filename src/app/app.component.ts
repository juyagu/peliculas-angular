import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clase2';
  //localStorage.setItem('currentUser','administrador');
  //localStorage.setItem('currentUser', token);

  ngOnInit(){
    localStorage.setItem('currentUser','usuario');
  }
}
