import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.scss'],
})
export class CrearRecetaComponent implements OnInit {

  nombrePag: string;
  categoria: any;
  image: any;
  receta = {
    Nombre: "",
    image: "",
    ingredientes: "",
    descripcion: "",
    categoria: "",
    ruta: ""
  }

  constructor(private db:FirestoreService, private router: Router) { }

  ngOnInit() {
    this.categoria = JSON.parse(localStorage.getItem("categoria"));
    this.nombrePag = "Crear " + this.categoria.Nombre;
    this.receta.categoria = this.categoria.Nombre;
    this.receta.ruta = "Recetario/" + this.categoria.Nombre + "/Recetas";
  }

  cargarImagen(event: any){
    this.image = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(this.image[0]);
    reader.onloadend = () => {
      this.image = reader.result;
      this.receta.image = this.image;
    }
  }

  crearReceta(){
    this.db.createDocWithImage(this.receta, this.receta.ruta, this.receta.Nombre).then(() => {
      this.router.navigateByUrl("/verCategoria")
    })
  }

}
