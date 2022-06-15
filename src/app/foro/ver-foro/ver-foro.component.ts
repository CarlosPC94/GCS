import { InteractionService } from './../../services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ver-foro',
  templateUrl: './ver-foro.component.html',
  styleUrls: ['./ver-foro.component.scss'],
})
export class VerForoComponent implements OnInit {

  constructor(private db: FirestoreService, private auth: AuthService, private toast:InteractionService) { }

  comentarios : Comentarios[] = [];
  foro: any;
  mensaje = "";
  user: any;
  nombrePag: string;

  ngOnInit() {
    this.nombrePag = "Tema"
    this.auth.comprobarPermisos();
    this.foro = JSON.parse(localStorage.getItem("foro"));
    console.log(this.foro);
    this.db.getCollectionOrderByDate<Comentarios>("Temas/"+ this.foro.Titulo + "/Comentarios").subscribe( res => {
      this.comentarios = res;
      console.log(this.comentarios)
  })
  }

  enviarMsj(){
    this.user = JSON.parse(localStorage.getItem("User"));
    var data = {
      Texto: this.mensaje,
      Usuario: this.user.displayName,
      image: this.user.photoURL,
      date: new Date()
    }
    var id = Math.floor(Math.random() * (9999999999 - 11111111)) + 1111111;
    this.db.createDoc(data, "Temas/"+ this.foro.Titulo + "/Comentarios", id.toString()).then(() => {
      this.toast.presentToast("Mensaje Publicado Correctamente!")
    })
  }
}
