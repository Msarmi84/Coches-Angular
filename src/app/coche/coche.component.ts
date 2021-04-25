import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input() coche: Coche;
  @Input() esTemaOscuro: boolean = true;

  @Output() cocheSeleccionado = new EventEmitter<Coche>();
  @Output() borrarCoche = new EventEmitter<Coche>();


  constructor() { }

  ngOnInit(): void {

  }

  comprar(event: Event, coche: Coche): void {
    event.stopPropagation(); // no tiene en cuenta el evento sobre la fila de la tabla
    if (coche.available){
      coche.available--;
    }
  }

  iconoPulsado(mensaje: string): void {
    alert(mensaje);
  }

  cocheClick(coche: Coche): void {
    this.cocheSeleccionado.emit(coche);
  }

  eliminarClick(event: Event, coche: Coche): void {
    event.stopPropagation(); // no tiene en cuenta el evento sobre la fila de la tabla
    if (window.confirm('Estas seguro que quieres eliminar este coche')){
      this.borrarCoche.emit(coche);
    }
  }

}
