import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PetsComponent } from './pages/pets/pets.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

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
  },
  
  {
  path: 'pet/:id',
  component: DetalhesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }