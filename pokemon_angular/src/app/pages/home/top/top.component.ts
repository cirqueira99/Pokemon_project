import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  optionsOrden: string[] = ['Número', 'Habilidade'];
  selectControl: FormControl = new FormControl(this.optionsOrden[0]);

  constructor(){}
}
