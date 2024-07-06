import { Component, Input } from '@angular/core';
import { IPokemon } from '../../../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrl: './list-pokemons.component.css'
})
export class ListPokemonsComponent {
  @Input() pokemonList: IPokemon[];

}
