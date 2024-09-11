import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { NamedAPIResource, NamedAPIResourceList } from '../../shared/interfaces/Common/resource';
import { Pokemon } from '../../shared/interfaces/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){}
  
}
