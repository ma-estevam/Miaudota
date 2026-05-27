import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnInit {

  pet: any = {};

  id!: number;

  constructor(

    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router

  ) {}

  ngOnInit(): void {

    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.carregarPet();

  }

  carregarPet() {

    this.petService.buscarPet(this.id)
      .subscribe((data) => {

        this.pet = data;

      });

  }

  atualizar() {

    this.petService.updatePet(this.id, this.pet)
      .subscribe(() => {

        alert('Pet atualizado!');

      });

  }

  excluir() {

    this.petService.deletePet(this.id)
      .subscribe(() => {

        alert('Pet removido!');

        this.router.navigate(['/pets']);

      });

  }

}
