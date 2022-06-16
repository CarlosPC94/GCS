import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { ForoComponent } from './foro/foro.component';
import { MenuNormalComponent } from './menu-normal/menu-normal.component';
import { CrearForoComponent } from './foro/crear-foro/crear-foro.component';
import { VerForoComponent } from './foro/ver-foro/ver-foro.component';
import { MedicosComponent } from './medicos/medicos.component';
import { VerMedicoComponent } from './medicos/ver-medico/ver-medico.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { VerCategoriaComponent } from './recetario/ver-categoria/ver-categoria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CrearRecetaComponent } from './recetario/ver-categoria/crear-receta/crear-receta.component';
import { VerRecetaComponent } from './recetario/ver-categoria/ver-receta/ver-receta.component';
import { CitasComponent } from './citas/citas.component';
import { CrearCitaComponent } from './citas/crear-cita/crear-cita.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, AjustesComponent, RegisterComponent, ForoComponent, MenuNormalComponent, CrearForoComponent,
     VerForoComponent, MedicosComponent, VerMedicoComponent, RecetarioComponent, VerCategoriaComponent, PerfilComponent, CustomHeaderComponent,
      CrearRecetaComponent, VerRecetaComponent, CitasComponent, CrearCitaComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule,
     RouterModule, FormsModule, ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule, AngularFireStorageModule, NgxStarRatingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
