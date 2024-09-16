import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/interfaces/Pokemon';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { IPokemonCard, IType, ITypeColors } from '../../../shared/interfaces/pokemon-card.interface';
import { NamedAPIResource, NamedAPIResourceList } from '../../../shared/interfaces/Common';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrl: './list-pokemons.component.css'
})
export class ListPokemonsComponent {  
  @Input() pokemonsCardList: IPokemonCard[];
  
  constructor(){}

  // loadPokemonTypes(pokemon: Pokemon): TypeGroup{    
  //   let pokemontypes: TypeGroup = {
  //     types: [],
  //     typesDamage: []
  //   };
  
  //   pokemon.types.forEach((t: PokemonType) => {
  //     this.pokemonService.getPokemonType(t).subscribe({
  //       next: (responseType: Type) => {
          
  //         pokemontypes.types.push({ name: t.type.name, url: t.type.url});  

  //         responseType.damage_relations.double_damage_from.forEach(d => {
  //           pokemontypes.typesDamage.push({ name: d.name, url: d.url});   
  //         });
  //       },
  //       error: erro => console.log(erro)
  //     });
  //   });

  //   return pokemontypes;
  // }  

  
}
