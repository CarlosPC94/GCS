import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/models/medicos';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss'],
})
export class CrearCitaComponent implements OnInit {

  nombrePag : string;
  medico: any;
  public cita = {
    Nombre: '',
    dia: '',
    hora: '',
    motivo: ''
  }
  fecha: string;
  user: any;

  constructor(private route: Router, private db: FirestoreService, private toast: InteractionService) { }

  ngOnInit() {
    this.nombrePag = "Apuntar Cita"
    this.medico = JSON.parse(localStorage.getItem("medic"));
    console.log(this.medico)
    this.user = JSON.parse(localStorage.getItem("User"));
    console.log(this.user);
    this.cita.Nombre = this.medico.Nombre;
  }

  crearCita(){
    this.cita.dia = this.fecha.substring(0,10);
    this.cita.hora = this.fecha.substring(11,16);
    this.db.createDoc(this.cita, "Citas/"+this.user.email+"/citas", this.db.createId()).then(() => {
      this.toast.presentLoading("Cargando").then(() => {
        this.toast.closeLoading();
        this.toast.presentToast("Cita Guardada");
        this.route.navigateByUrl("/citas")
      })
    })
  }

}
