import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITypeColors } from '../../../../shared/interfaces/pokemon-card.interface';

interface IFilterSelected {
  caracters: string[],
  types: string[]
}

@Component({
  selector: 'app-filter-pokemons',
  templateUrl: './filter-pokemons.component.html',
  styleUrl: './filter-pokemons.component.css'
})
export class FilterPokemonsComponent implements OnInit, AfterViewInit {
  typesPokemons: ITypeColors[] = [
    { name: 'Bug', background: 'rgba(114, 159, 63, 0.7)', color: '#FFF' },
    { name: 'Dark', background: 'rgba(79, 78, 78, 0.7)', color: '#FFF' },
    { name: 'Dragon', background: 'linear-gradient(180deg, #53a4cf, #f16e57 70%)', color: '#FFF' },
    { name: 'Electric', background: 'rgba(238, 213, 53, 0.7)', color: '#000' },
    { name: 'Fairy', background: 'rgba(250, 196, 234, 0.7)', color: '#000' },
    { name: 'Fighting', background: 'rgba(197, 109, 55, 0.7)', color: '#FFF' },
    { name: 'Fire', background: 'rgba(227, 0, 0, 0.70)', color: '#FFF' },
    { name: 'Flying', background: 'linear-gradient(180deg, #20c8ff, #e5e6e7 80%)', color: '#000' },
    { name: 'Ghost', background: 'rgba(123, 98, 163, 0.7)', color: '#FFF' },
    { name: 'Grass', background: 'rgba(9, 82, 20, 0.7)', color: '#FFF' },
    { name: 'Ground', background: 'rgba(163, 140, 33, 0.7)', color: '#FFF' },
    { name: 'Ice', background: 'rgba(81, 196, 231, 0.7)', color: '#000' },
    { name: 'Normal', background: 'rgba(230, 230, 230, 0.7)', color: '#000' },
    { name: 'Poison', background: 'rgba(185, 127, 201, 0.7)', color: '#FFF' },
    { name: 'Psychic', background: 'rgba(243, 102, 185, 0.7)', color: '#FFF' },
    { name: 'Rock', background: 'rgba(104, 87, 9, 0.7)', color: '#FFF' },
    { name: 'Steel', background: 'linear-gradient(180deg, #f231a3, #8ca2f3 85%)', color: '#000' },
    { name: 'Water', background: 'rgba(12, 83, 129, 0.7)', color: '#FFF' }, 
    { name: 'Unknown', background: 'rgba(127, 130, 143, 0.7)', color: '#FFF' }
  ];
    
  filtersSelected: IFilterSelected = {
    caracters: [],
    types: []
  };

  constructor(
    public dialogRef: MatDialogRef<FilterPokemonsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: IFilterSelected
  ){
  }

  ngOnInit(): void {
    this.filtersSelected = this.data;
  }

  ngAfterViewInit(): void {
    if(this.data.caracters.length > 0  ||  this.data.types.length > 0){
      this.loadingSelectedFilter();
    }  
  }
 
  loadingSelectedFilter(): void{
    this.data.caracters.forEach(c => {
      let element: HTMLImageElement = document.getElementById('img-'+c)as HTMLImageElement;
      let srcNew = '../../../../../assets/pk-shadows/pk-' + c + '-select.jpg';  
      element.setAttribute('src', srcNew);
    });

    this.data.types.forEach(t => {
      let element: HTMLDivElement = document.getElementById(t) as HTMLDivElement;
      element.style.color = '#bcbcbc';
      element.style.background = '#111111';
    });
  }

  selectCaracterPokemon(catracterPk: string): void{
    let imgPk: HTMLImageElement = document.getElementById('img-'+catracterPk) as HTMLImageElement;
    let i: number = this.data.caracters.indexOf(catracterPk)
    
    if(i != -1){       
      let srcNew = '../../../../../assets/pk-shadows/pk-' + catracterPk + '.jpg';   
      imgPk.setAttribute('src', srcNew); 
      this.filtersSelected.caracters.splice(i, 1);      
    }else {      
      let srcNew = '../../../../../assets/pk-shadows/pk-' + catracterPk + '-select.jpg';         
      imgPk.setAttribute('src', srcNew);  
      this.filtersSelected.caracters.push(catracterPk)
    }        
  }

  selectTypePokemon(typePkName: string): void{
    let divTypePk: HTMLDivElement = document.getElementById(typePkName) as HTMLDivElement;
    let i: number = this.data.types.indexOf(typePkName)
    let typePokemon: ITypeColors = this.typesPokemons.find(p => p.name == typePkName)!;

    if(i != -1){       
      divTypePk.style.color = typePokemon.color;
      divTypePk.style.background = typePokemon.background;
      this.filtersSelected.types.splice(i, 1);      
    }else {      
      divTypePk.style.color = '#bcbcbc';
      divTypePk.style.background = '#111111';
      this.filtersSelected.types.push(typePkName)
    }    
  }

  resetFilters(): void {        
    let caracters = [...this.filtersSelected.caracters];
    let types = [...this.filtersSelected.types];

    caracters.forEach(c => {
      this.selectCaracterPokemon(c);
    });

    types.forEach(t => {
      this.selectTypePokemon(t);
    });    
  }

  search(): void {
    this.closedDialog();
  }

  closedDialog(): void {
    this.dialogRef.close(this.filtersSelected);
  }
}
