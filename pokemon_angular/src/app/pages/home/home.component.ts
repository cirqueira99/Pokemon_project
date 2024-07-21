import { Component, OnInit } from '@angular/core';
import { IPokemonCard } from '../../shared/interfaces/pokemon.interface';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  pokemon: IPokemonCard = {
    id: '001',
    name: 'Bulbassaur',
    types: [
      { id: '000', name: 'Grama', corFundo: '#3D9546', corFont: '#fff'},
      { id: '000', name: 'Poison', corFundo: '#833D95', corFont: '#fff'}
    ],
    weaknesses: [
      { id: '000', name: 'Fire', corFundo: '#F58400', corFont: '#fff'},
    ],
    imagem: '001'
  }

  pokemonList: IPokemonCard[] = [
    this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon
    // this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon,
    // this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon
  ];
  
  constructor(private pokemonService: PokemonService){

  }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.pokemonService.getAllPokemons().subscribe(resultado => console.log(resultado));
  }
}
