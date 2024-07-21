import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from '../interfaces/resource.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string = "";

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<any>{
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    return this.http.get<NamedAPIResourceList>(`${ this.apiUrl }`);
  }

  getPokemonByUrl(pokemon: any){
    this.apiUrl = pokemon.url;

    return this.http.get(`${ this.apiUrl }`);
  }
}
