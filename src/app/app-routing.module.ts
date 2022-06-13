import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { ForoComponent } from './foro/foro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CrearForoComponent } from './foro/crear-foro/crear-foro.component';
import { VerForoComponent } from './foro/ver-foro/ver-foro.component';
import { MedicosComponent } from './medicos/medicos.component';
import { VerMedicoComponent } from './medicos/ver-medico/ver-medico.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { VerCategoriaComponent } from './recetario/ver-categoria/ver-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ajustes',
    component: AjustesComponent
  },
  {
    path: 'foro',
    component: ForoComponent
  },
  {
    path: 'crearForo',
    component: CrearForoComponent
  },
  {
    path: 'verForo',
    component: VerForoComponent
  },
  {
    path: 'medicos',
    component: MedicosComponent
  },
  {
    path: 'verMedico',
    component: VerMedicoComponent
  },
  {
    path: 'recetario',
    component: RecetarioComponent
  },
  {
    path: 'verCategoria',
    component: VerCategoriaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
