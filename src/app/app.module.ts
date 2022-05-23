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

@NgModule({
  declarations: [AppComponent, LoginComponent, AjustesComponent, RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule,
     RouterModule, FormsModule, ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule, AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
