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
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';


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
    MatSelectModule,
    MatDialogTitle, 
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose
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
    MatSelectModule,
    MatDialogTitle, 
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose
  ]
})
export class SharedModule { }
