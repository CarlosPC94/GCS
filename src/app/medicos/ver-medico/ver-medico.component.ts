import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/models/medicos';

@Component({
  selector: 'app-ver-medico',
  templateUrl: './ver-medico.component.html',
  styleUrls: ['./ver-medico.component.scss'],
})
export class VerMedicoComponent implements OnInit {

  medico: any;
  nombrePag: string;
  constructor() { }
  
  ngOnInit() {
    this.nombrePag = "Médico"
    this.medico = JSON.parse(localStorage.getItem("medico"));
    console.log(this.medico.Valoraciones)
  }

}
