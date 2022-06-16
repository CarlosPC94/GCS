import { Citas } from './../models/citas';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
})
export class CitasComponent implements OnInit {

  nombrePag: string;
  citas: Citas[] = [];
  user: any;

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("User"));
    this.nombrePag = "Mis Citas"
    this.db.getCollection<Citas>("Citas/"+this.user.email+"/citas").subscribe(res => {
      res.forEach((data) => {
        console.log(new Date(data.dia))
        if (new Date(data.dia) > new Date())
          this.citas.push(data);
      })
      this.citas.sort(function(a,b){
        return +new Date(a.dia) - +new Date(b.dia);
      });
    })
  }

}
