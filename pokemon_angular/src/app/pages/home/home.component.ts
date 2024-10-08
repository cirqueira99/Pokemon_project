import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { NamedAPIResource, NamedAPIResourceList } from '../../shared/interfaces/Common/resource';
import { Pokemon } from '../../shared/interfaces/Pokemon';
import { IPokemonCard, IType, ITypeColors } from '../../shared/interfaces/pokemon-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  pokemonsCardList: IPokemonCard[] = []; 
  pokemonsCardListNew: IPokemonCard[] = []; 
  typesPokemons: ITypeColors[] = [
    { name: 'bug', background: 'rgba(114, 159, 63, 0.7)', color: '#FFF' },
    { name: 'dark', background: 'rgba(79, 78, 78, 0.7)', color: '#FFF' },
    { name: 'dragon', background: 'linear-gradient(180deg, #53a4cf, #f16e57 70%)', color: '#FFF' },
    { name: 'electric', background: 'rgba(238, 213, 53, 0.7)', color: '#000' },
    { name: 'fairy', background: 'rgba(250, 196, 234, 0.7)', color: '#000' },
    { name: 'fighting', background: 'rgba(197, 109, 55, 0.7)', color: '#FFF' },
    { name: 'fire', background: 'rgba(227, 0, 0, 0.70)', color: '#FFF' },
    { name: 'flying', background: 'linear-gradient(180deg, #20c8ff, #e5e6e7 80%)', color: '#000' },
    { name: 'ghost', background: 'rgba(123, 98, 163, 0.7)', color: '#FFF' },
    { name: 'grass', background: 'rgba(9, 82, 20, 0.7)', color: '#FFF' },
    { name: 'ground', background: 'rgba(163, 140, 33, 0.7)', color: '#FFF' },
    { name: 'ice', background: 'rgba(81, 196, 231, 0.7)', color: '#000' },
    { name: 'normal', background: 'rgba(230, 230, 230, 0.7)', color: '#000' },
    { name: 'poison', background: 'rgba(185, 127, 201, 0.7)', color: '#FFF' },
    { name: 'psychic', background: 'rgba(243, 102, 185, 0.7)', color: '#FFF' },
    { name: 'rock', background: 'rgba(104, 87, 9, 0.7)', color: '#FFF' },
    { name: 'steel', background: 'linear-gradient(180deg, #f231a3, #8ca2f3 85%)', color: '#000' },
    { name: 'water', background: 'rgba(12, 83, 129, 0.7)', color: '#FFF' }, 
    { name: 'unknown', background: 'rgba(127, 130, 143, 0.7)', color: '#FFF' }
  ];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.getAllPokemons();    
  }

  getAllPokemons(){
    this.pokemonService.getAllPokemons().subscribe({
      next: (response: NamedAPIResourceList) => {
        response.results.forEach((r: NamedAPIResource) => {
          this.pokemonService.getPokemonByUrl(r).subscribe({
            next: (pokemon: Pokemon) => {
              this.createPokemonCard(pokemon);          
            },
            error: erro => console.log(erro)            
          });
        });
      },
      error: erro => console.log(erro), 
      complete: () => console.log(this.pokemonsCardList)
    });
  }  

  createPokemonCard(pokemon: Pokemon): void{    
    let pokemonCard: IPokemonCard = {
      id: pokemon.id,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase(),
      types: this.createPokemonTypes(pokemon),
      typesDamage: [],
      imagem: pokemon.sprites.front_default?? ''
    };

    this.pokemonsCardList.push(pokemonCard);
  }

  createPokemonTypes(pokemon: Pokemon): IType[]{
    let pokemonTypes: IType[] = [];

    pokemon.types.forEach(t => pokemonTypes.push(this.createPokemonType(t.type.name)));

    return pokemonTypes;
  };

  createPokemonType(typeName: string): IType{
    let colorsType: ITypeColors = this.typesPokemons.find(t => t.name == typeName)!;

    const pokemonType: IType = { 
      name: typeName.charAt(0).toUpperCase() + typeName.slice(1).toLowerCase(), 
      colorBack: colorsType.background,
      colorFront: colorsType.color
    };

    return pokemonType;
  }

  orderPokemons(newOrderOption: number){
    switch(newOrderOption){
      case 0:
        this.pokemonsCardList.sort((p1: IPokemonCard, p2: IPokemonCard) => p1.id - p2.id);
      break;      
      case 1:
        this.pokemonsCardList.sort((p1: IPokemonCard, p2: IPokemonCard) => p2.id - p1.id);
      break;
      case 2:
        this.pokemonsCardList.sort((p1: IPokemonCard, p2: IPokemonCard) => this.orderCompare(p1.name, p2.name));
      break;
      case 3:
        this.pokemonsCardList.sort((p1: IPokemonCard, p2: IPokemonCard) => this.orderCompare(p2.name, p1.name));
      break;      
      default:
      break;
    }
  }

  orderCompare(name1: string, name2: string){
    if (name1 > name2) {
      return 1;
    }
    if (name1 < name2) {
      return -1;
    }    
    return 0;
  }
}
