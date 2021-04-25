import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-tarjetas-coche',
  templateUrl: './tarjetas-coche.component.html',
  styleUrls: ['./tarjetas-coche.component.scss']
})
export class TarjetasCocheComponent implements OnInit {

  soloRating: boolean = false;
  txtBoton = 'Ver todo el catálogo';
  elCoche: Coche;

  listadoDeCoches: Coche[] = [];

  @Input() coches: Coche;
  @Input() esTemaOscuro: boolean;

  @Output() cocheSeleccionado = new EventEmitter<Coche>();


  constructor() { }


  ngOnInit(): void {

  }

  mostrarRating() {
    this.soloRating = !this.soloRating;
    this.txtBoton = this.soloRating ?  'Ver todo el catálogo' : 'Ver coches con rating';
  }










}
