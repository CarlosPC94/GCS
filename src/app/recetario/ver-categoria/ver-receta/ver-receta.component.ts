import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-receta',
  templateUrl: './ver-receta.component.html',
  styleUrls: ['./ver-receta.component.scss'],
})
export class VerRecetaComponent implements OnInit {

  receta: any;
  nombrePag: string;

  constructor() { }

  ngOnInit() {
    this.receta = JSON.parse(localStorage.getItem("receta"));
    this.nombrePag = "Receta"
  }

}
