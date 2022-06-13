import { Recetario } from './../../models/recetario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.scss'],
})
export class VerCategoriaComponent implements OnInit {

  categoria: any;
  recetas: Receta[] = [];
  constructor(private auth: AuthService, private db: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.categoria = JSON.parse(localStorage.getItem("categoria"));
    console.log(this.categoria)
    this.db.getCollection<Receta>("Recetario/"+this.categoria.Nombre+"/Recetas").subscribe(res => {
      this.recetas = res;
      console.log(this.recetas);
    })
  }

}
