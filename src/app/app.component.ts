import { Component, OnInit } from '@angular/core';
import { Coche } from './models/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  listadoDeCoches: Coche[] = [];
  mostrarTabla = false;



  ngOnInit(): void {
    this.listadoDeCoches.push(new Coche({

      id: 1,
      make: 'Turismo histórico',
      color: 'blanco',
      model: 'Berlín',
      state: '',
      doors: 5,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: 'Turismo histórico',
      visible: '',
      available: 'Berlín',
      price: 'Turismo histórico',
      rating: 4,
      foto: 'coche.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 2,
      make: 'Turismo histórico',
      color: 'gris',
      model: 'Berlín',
      state: '',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: 'Turismo histórico',
      visible: '',
      available: 'Berlín',
      price: 'Turismo histórico',
      rating: 7,
      foto: 'coche1.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 3,
      make: 'Turismo histórico',
      color: 'azul',
      model: 'Berlín',
      state: '',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: 'Turismo histórico',
      visible: '',
      available: 'Berlín',
      price: 'Turismo histórico',
      rating: 6,
      foto: 'coche2.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 4,
      make: 'Turismo histórico',
      color: 'rojo',
      model: 'Berlín',
      state: '',
      doors: 5,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: 'Turismo histórico',
      visible: '',
      available: 'Berlín',
      price: 'Turismo histórico',
      rating: 8,
      foto: 'coche3.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 5,
      make: 'Turismo histórico',
      color: 'negro',
      model: 'Berlín',
      state: '',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: 'Turismo histórico',
      visible: '',
      available: 'Berlín',
      price: 'Turismo histórico',
      rating: 9,
      foto: 'coche4.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 6,
      make: 'Turismo histórico',
      color: 'verde',
      model: 'Berlín',
      state: '',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: 'Turismo histórico',
      visible: '',
      available: 'Berlín',
      price: 'Turismo histórico',
      rating: 4,
      foto: 'coche5.jpg'
    }));
  }

  cambiarVista(): void {
    this.mostrarTabla = !this.mostrarTabla;
  }

}

