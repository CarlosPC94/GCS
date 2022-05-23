import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {

  constructor(private database: FirestoreService, private interaction : InteractionService) { }

  ngOnInit() {}

  crearNuevoUsuario(){
    this.interaction.presentLoading("Guardando ... ");
    const data = {
      nombre : "Carlos",
      email : "carlos@ua",
      password : "1234"
    }
    this.database.createDoc(data, "Users", "jaja").then(res => {
      this.interaction.closeLoading();
      this.interaction.presentToast("Se ha guardao correctamente!")
    })
  }

}
