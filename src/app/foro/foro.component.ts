import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Temas } from '../models/temas';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss'],
})
export class ForoComponent implements OnInit {

  constructor(private firestore: FirestoreService, private router: Router, private auth: AuthService) {
    if (this.auth.getUserLogged() == null)
      this.router.navigateByUrl("/login")
   }

  coche: String;
  foros: Temas[] = [];
  user: any;

  ngOnInit() {
    this.auth.comprobarPermisos();
    this.user = JSON.parse(localStorage.getItem("User"));
    console.log(this.user)
    this.firestore.getCollection<Temas>("Temas").subscribe(res => {
      this.foros = res;
    })
  }

  verForo(foro: Temas){

    var aux = {
      Titulo : foro.Titulo,
      Categoria : foro.Categoria,
      Descripcion : foro.Descripcion
    }
    localStorage.setItem("foro", JSON.stringify(aux));
    this.router.navigateByUrl("/verForo")
  }

}
