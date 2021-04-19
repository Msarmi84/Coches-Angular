import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  constructor() { }

  @Input() coche: Coche;


  ngOnInit(): void {

  }

}
