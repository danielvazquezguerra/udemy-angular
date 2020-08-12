import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mostrar = true;

  frase = {
    mensaje: 'Un gran poder require una gran responsabilidad.',
    autor: 'Ben Parker'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
