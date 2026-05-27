import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* MATERIAL */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/* COMPONENTS */
import { NavbarComponent } from './components/navbar/navbar.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { FooterComponent } from './components/footer/footer.component';

/* PAGES */
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PetsComponent } from './pages/pets/pets.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    PetCardComponent,

    CadastroComponent,
    PetsComponent,
    FooterComponent,
    HomeComponent,
    DetalhesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }