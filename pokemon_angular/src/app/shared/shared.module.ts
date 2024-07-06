import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './components/search/search.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ListPokemonsComponent } from '../pages/home/list-pokemons/list-pokemons.component';


@NgModule({
  declarations: [SearchComponent, PokemonCardComponent, ListPokemonsComponent],
  imports: [
    //Material
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    SearchComponent,
    PokemonCardComponent,
    ListPokemonsComponent,

    //Material
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule 
  ]
})
export class SharedModule { }
