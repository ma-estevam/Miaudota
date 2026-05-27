import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  pet = {
    nome: '',
    idade: '',
    raca: '',
    tipo: '',
    descricao: '',
    imagem: ''
  };

  constructor(
    private petService: PetService,
    private snackBar: MatSnackBar
  ) {}

  salvar() {

    this.petService.salvarPet(this.pet)
      .subscribe({
        next: (res: any) => {

          this.snackBar.open(
            res.mensagem,
            'Fechar',
            {
              duration: 3000
            }
          );

        },

        error: () => {

          this.snackBar.open(
            'Erro ao cadastrar!',
            'Fechar',
            {
              duration: 3000
            }
          );

        }
      });

  }

}