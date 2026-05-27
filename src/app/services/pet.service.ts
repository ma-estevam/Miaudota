import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpParams
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  // LISTAR

  listarPets() {

    return this.http.get(
      `${this.apiUrl}/listar.php`
    );

  }

  // SALVAR

  salvarPet(pet: any) {

    const params = new HttpParams()

      .set('nome', pet.nome)
      .set('idade', pet.idade)
      .set('raca', pet.raca)
      .set('tipo', pet.tipo)
      .set('descricao', pet.descricao)
      .set('imagem', pet.imagem);

    return this.http.get(

      `${this.apiUrl}/salvar.php`,
      { params }

    );

  }

  // BUSCAR POR ID

  buscarPet(id: number) {

    const params = new HttpParams()
      .set('id', id);

    return this.http.get(

      `${this.apiUrl}/getPetById.php`,
      { params }

    );

  }

  // ATUALIZAR

  updatePet(id: number, pet: any) {

    const params = new HttpParams()

      .set('id', id)
      .set('nome', pet.nome)
      .set('idade', pet.idade)
      .set('raca', pet.raca)
      .set('tipo', pet.tipo)
      .set('descricao', pet.descricao)
      .set('imagem', pet.imagem);

    return this.http.get(

      `${this.apiUrl}/updatePet.php`,
      { params }

    );

  }

  // EXCLUIR

  deletePet(id: number) {

    const params = new HttpParams()
      .set('id', id);

    return this.http.get(

      `${this.apiUrl}/deletePet.php`,
      { params }

    );

  }

}