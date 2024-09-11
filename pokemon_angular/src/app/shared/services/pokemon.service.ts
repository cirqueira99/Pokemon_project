import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedAPIResource, NamedAPIResourceList } from '../interfaces/Common/resource';
import { Pokemon, PokemonType, Type } from '../interfaces/Pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string = "";

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<NamedAPIResourceList>{
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    return this.http.get<NamedAPIResourceList>(`${ this.apiUrl }`);
  }

  getPokemonByUrl(pokemon: NamedAPIResource): Observable<Pokemon>{
    this.apiUrl = pokemon.url;

    return this.http.get<Pokemon>(`${ this.apiUrl }`);
  }

  getPokemonType(pokemonType: PokemonType): Observable<Type>{
    this.apiUrl = pokemonType.type.url;

    return this.http.get<Type>(`${this.apiUrl}`);
  }
}
