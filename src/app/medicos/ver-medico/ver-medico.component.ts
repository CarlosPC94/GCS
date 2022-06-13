import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/models/medicos';

@Component({
  selector: 'app-ver-medico',
  templateUrl: './ver-medico.component.html',
  styleUrls: ['./ver-medico.component.scss'],
})
export class VerMedicoComponent implements OnInit {

  constructor() { }
  medico: any;
  ngOnInit() {
    this.medico = JSON.parse(localStorage.getItem("medico"));
  }

}
