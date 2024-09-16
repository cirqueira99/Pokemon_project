import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  @Output() orderPokemonsEvent = new EventEmitter<number>();
  optionsOrder: string[] = ['Número crescente', 'Número decrescente', 'Ordem alfabética A-Z', 'Ordem alfabética Z-A'];
  selectControl: FormControl = new FormControl(0);

  constructor(){}

  executeOrder(){
    this.orderPokemonsEvent.emit(this.selectControl.value);
  }

}
