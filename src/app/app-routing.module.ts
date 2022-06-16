import { CrearCitaComponent } from './citas/crear-cita/crear-cita.component';
import { CitasComponent } from './citas/citas.component';
import { CrearRecetaComponent } from './recetario/ver-categoria/crear-receta/crear-receta.component';
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
import { PerfilComponent } from './perfil/perfil.component';
import { VerRecetaComponent } from './recetario/ver-categoria/ver-receta/ver-receta.component';

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
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'crearReceta',
    component: CrearRecetaComponent
  },
  {
    path: 'verReceta',
    component: VerRecetaComponent
  },
  {
    path: 'citas',
    component: CitasComponent
  },
  {
    path: 'crearCita',
    component: CrearCitaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
