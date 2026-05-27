import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: any[] = [];

  loading = true;

  constructor(private petService: PetService) {}

  ngOnInit(): void {

    this.petService.listarPets()
      .subscribe((data: any) => {

        this.pets = data;

        this.loading = false;

      });

  }

}