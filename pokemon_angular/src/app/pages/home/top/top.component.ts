import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FilterPokemonsComponent } from './filter-pokemons/filter-pokemons.component';


interface IFilterSelected {
  caracters: string[],
  types: string[]
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  @Output() orderPokemonsEvent = new EventEmitter<number>();
  @Output() filterPokemonsEvent = new EventEmitter<IFilterSelected>();

  optionsOrder: string[] = ['Número crescente', 'Número decrescente', 'Ordem alfabética A-Z', 'Ordem alfabética Z-A'];
  selectControl: FormControl = new FormControl(0);
  filtersSelected = {
    caracters: [],
    types: []
  };

  constructor(public dialog: MatDialog){}

  executeOrder(){
    this.orderPokemonsEvent.emit(this.selectControl.value);
  }

  executeFilter(){
    this.filterPokemonsEvent.emit(this.filtersSelected);
  }

  openDialog(){    
    const dialogRef = this.dialog.open(FilterPokemonsComponent, {
      height: '500px',
      width: '745px',
      panelClass: ['filterModal'], 
      data: structuredClone(this.filtersSelected),
      autoFocus: false, 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null || result != undefined){
        this.filtersSelected = result;     
        
        console.log("------")
        console.log(this.filtersSelected.caracters)
        console.log(this.filtersSelected.types)
        this.executeFilter();   
      }      
    });
  }  
  
}
