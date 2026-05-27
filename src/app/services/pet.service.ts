import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  listarPets() {

    return this.http.get(
      `${this.apiUrl}/listar.php`
    );

  }

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

}