import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-foro',
  templateUrl: './crear-foro.component.html',
  styleUrls: ['./crear-foro.component.scss'],
})
export class CrearForoComponent implements OnInit {

  public tema = {
    Titulo : "",
    Categoria: "",
    Descripcion: ""
  }
  constructor(private db: FirestoreService, private toast: InteractionService, private router: Router) { }

  ngOnInit() {}

  crearTema(){
    this.db.createDoc(this.tema, "Temas", this.tema.Titulo).then(res => {
      console.log("Se ha creado correctamente");  
      this.toast.presentLoading("Cargando").then(() => {
        this.toast.closeLoading();
        this.toast.presentToast("Tema creado con éxito");
      })
      this.router.navigateByUrl("/foro");
    })
  }

}
