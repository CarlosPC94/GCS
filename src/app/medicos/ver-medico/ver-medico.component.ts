import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/models/medicos';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-ver-medico',
  templateUrl: './ver-medico.component.html',
  styleUrls: ['./ver-medico.component.scss'],
})
export class VerMedicoComponent implements OnInit {

  medico: any;
  id: string;
  random: any;
  nombrePag: string;
  constructor(private db: FirestoreService) { }
  
  ngOnInit() {
    this.nombrePag = "Médico"
    this.medico = localStorage.getItem("medico");
    this.db.getDocById<Medicos>("Medicos", this.medico).subscribe(res => {
      this.id = this.medico
      this.medico = res
    })

    
  }

  valorarMedico(){
    let valoraciones: number = this.medico.Valoraciones + 1;
    let valoracion: number = 2;
    let calculo: number = (valoracion + (this.medico.Valoraciones*this.medico.Valoracion))/valoraciones;
    let round: number = Math.round(calculo);
    calculo = calculo * 100;
    calculo = Math.round(calculo)/100;
    console.log(calculo);
    this.db.updateDoc("Medicos", this.id, valoraciones, calculo, round);
  }

}
