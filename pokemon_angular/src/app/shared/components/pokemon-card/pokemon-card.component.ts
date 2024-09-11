import { Component, Input } from '@angular/core';
import { IPokemonCard } from '../../interfaces/pokemon-card.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {  
  @Input() pokemonCard: IPokemonCard;  
  
  
  constructor(){}  
}
  
