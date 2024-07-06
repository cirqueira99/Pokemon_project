import { Component, Input } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon: IPokemon;
  
  constructor(){}

}
