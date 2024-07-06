import { Component } from '@angular/core';
import { IPokemon } from '../../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokemon: IPokemon = {
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

  pokemonList: IPokemon[] = [
    this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon
    // this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon,
    // this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon, this.pokemon
  ];
  windowWidth = window.innerWidth;
  constructor(){
    console.log(this.windowWidth)
  }
}
