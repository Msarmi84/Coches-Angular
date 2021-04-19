import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-tabla-coches',
  templateUrl: './tabla-coches.component.html',
  styleUrls: ['./tabla-coches.component.scss']
})
export class TablaCochesComponent implements OnInit {

  constructor() { }

  @Input() coches: Coche[] = [];

  ngOnInit(): void {
  }

}
