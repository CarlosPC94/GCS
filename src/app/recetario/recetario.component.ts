import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { AuthService } from '../services/auth.service';
import { Recetario } from '../models/recetario';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss'],
})
export class RecetarioComponent implements OnInit {

  recetarios: Recetario[] = [];

  constructor(private auth: AuthService, private db: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.db.getCollection<Recetario>("Recetario").subscribe(res => {
      this.recetarios = res;
      console.log(this.recetarios)
    })
  }

  verCategoria(categoria: Recetario){
    localStorage.setItem("categoria", JSON.stringify(categoria));
    this.router.navigateByUrl("/verCategoria")
  }

}
