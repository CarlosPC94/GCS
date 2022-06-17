import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/models/medicos';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';

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
  public form: FormGroup;
  rating: number;
  valorado: boolean;

  constructor(private db: FirestoreService, private fb: FormBuilder, private toast: InteractionService, private route: Router) { }
  
  ngOnInit() {
    this.valorado = false;
    this.nombrePag = "Médico"
    this.medico = localStorage.getItem("medico");
    this.db.getDocById<Medicos>("Medicos", this.medico).subscribe(res => {
      this.id = this.medico
      this.medico = res
    })
    this.rating = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
    
  }

  valorarMedico(){
    
    this.valorado = true;
    let valoracion = this.form.value.rating;
    let valoraciones = this.medico.Valoraciones + 1;
    let calculo = (valoracion + (this.medico.Valoraciones*this.medico.Valoracion))/valoraciones;
    let round = Math.round(calculo);
    calculo = calculo * 100;
    calculo = Math.round(calculo)/100;
    console.log(calculo);
    this.db.updateDoc("Medicos", this.id, valoraciones, calculo, round);
    this.toast.presentLoading("Valorando ...").then(() => {
      this.toast.closeLoading();
      this.toast.presentToast("Gracias por tú valoración!")
      localStorage.setItem("medic", JSON.stringify(this.medico))
    })
  }

  irCita(){
    this.route.navigateByUrl("/crearCita");
  }

}
