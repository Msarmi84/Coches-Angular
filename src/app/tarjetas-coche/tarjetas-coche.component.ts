import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-tarjetas-coche',
  templateUrl: './tarjetas-coche.component.html',
  styleUrls: ['./tarjetas-coche.component.scss']
})
export class TarjetasCocheComponent implements OnInit {

  constructor() { }
  @Input() coches: Coche;


  ngOnInit(): void {

  }

}
