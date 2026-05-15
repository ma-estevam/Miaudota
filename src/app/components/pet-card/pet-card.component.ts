import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  standalone: false,
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent {

  @Input() nome!: string;
  @Input() idade!: string;
  @Input() imagem!: string;
  @Input() tipo!: string;

}