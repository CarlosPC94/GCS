import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';
import { Medicos } from '../models/medicos';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
})
export class MedicosComponent implements OnInit {

  medicos: Medicos[] = [];
  nombrePag: string;
  rating: number;
  ids: string[] = [];

  constructor(private auth: AuthService, private db: FirestoreService, private router: Router) {

  }

  ngOnInit() {
    this.nombrePag = "Médicos"
    this.db.getCollection<Medicos>("Medicos").subscribe(res => {
      this.medicos = res;
    })

    this.db.getIds("Medicos", this.ids);

  }

  verMedico(medico: Medicos, i: number){
    medico.id = this.ids[i];
    console.log(medico.id)
    localStorage.setItem("medico", medico.id)
    /* localStorage.setItem("medico", JSON.stringify(medico)); */
    this.router.navigateByUrl("/verMedico");
  }
}
