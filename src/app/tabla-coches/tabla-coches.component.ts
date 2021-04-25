import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-tabla-coches',
  templateUrl: './tabla-coches.component.html',
  styleUrls: ['./tabla-coches.component.scss']
})
export class TablaCochesComponent implements OnInit {

  soloRating: boolean = false;
  txtBoton = 'Ver todo el catálogo';

  @Input() coches: Coche[] = [];
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

  mostrarRating(): void {
    this.soloRating = !this.soloRating;
    this.txtBoton = this.soloRating ?  'Ver todo el catálogo' : 'Ver coches con rating';
  }

  iconoPulsado(mensaje: string): void {
    alert(mensaje);
  }

  cocheClick(coche: Coche): void {
    this.cocheSeleccionado.emit(coche);
  }

  eliminarClick(event: Event, coche: Coche): void {
    event.stopPropagation();
    if (window.confirm('Estas seguro que quieres eliminar este coche')){
      this.borrarCoche.emit(coche);
    }
  }


}


