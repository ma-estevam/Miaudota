import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PetsComponent } from './pages/pets/pets.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'pets',
    component: PetsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }