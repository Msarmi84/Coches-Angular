import { Component, OnInit } from '@angular/core';
import { Coche } from './models/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  listadoDeCoches: Coche[] = [];
  mostrarTabla = true;
  temaOscuro = true;
  mostrarForm = true;
  txtBotonForm = 'Ver formulario';
  elCoche: Coche;
  idlength = 1;



  ngOnInit(): void {
    this.listadoDeCoches.push(new Coche({

      id: 1,
      nombre: 'BMW',
      color: 'blanco',
      model: 'familiar',
      state: 'nuevo',
      doors: 5,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: true,
      visible: '',
      available: 5,
      price: 'Turismo histórico',
      rating: 4,
      foto: 'coche.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 2,
      nombre: 'Mercedes-Benz',
      color: 'gris',
      model: 'Berlina',
      state: 'segunda mano',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: false,
      visible: '',
      available: 1,
      price: 'Turismo histórico',
      rating: '',
      foto: 'coche1.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 3,
      nombre: 'Audi',
      color: 'azul',
      model: 'familiar',
      state: 'nuevo',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: true,
      visible: '',
      available: 20,
      price: 'Turismo histórico',
      rating: 6,
      foto: 'coche2.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 4,
      nombre: 'Lexus',
      color: 'rojo',
      model: 'Berlina',
      state: 'segunda mano',
      doors: 5,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: false,
      visible: '',
      available: 9,
      price: 'Turismo histórico',
      rating: '',
      foto: 'coche3.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 5,
      nombre: 'Renault',
      color: 'negro',
      model: 'familiar',
      state: 'nuevo',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: true,
      visible: '',
      available: 4,
      price: 'Turismo histórico',
      rating: 9,
      foto: 'coche4.jpg'
    }));
    this.listadoDeCoches.push(new Coche({
      id: 6,
      nombre: 'Ford',
      color: 'verde',
      model: 'Berlina',
      state: 'segunda mano',
      doors: 3,
      type: 'cerrado',
      engineHp: 'Pack Europa',
      discount: false,
      visible: '',
      available: 14,
      price: 'Turismo histórico',
      rating: 4,
      foto: 'coche5.jpg'
    }));

    this.idlength = this.listadoDeCoches.length + 1;

  }


  cambiarVista(): void {
    this.mostrarTabla = !this.mostrarTabla;
  }
  cambiarTema(): void {
    this.temaOscuro = !this.temaOscuro;
  }

  verForm(): void {
    this.mostrarForm = !this.mostrarForm;
    this.txtBotonForm = !this.txtBotonForm ?  'Ver formulario' : 'Ocultar Formulario';
  }

  cocheSeleccionado(coche: Coche): void {
    this.elCoche = new Coche(coche); // nueva instancia de un coche
  }

  borrarCoche(coche: Coche): void {
    const cocheIdx = this.listadoDeCoches.findIndex(x => x.id === coche.id);
    if (cocheIdx >= 0) {
      this.listadoDeCoches.splice(cocheIdx, 1);
    }
  }

  enviar(coche: Coche): void {

    console.log(coche);
    const cocheIdx = this.listadoDeCoches.findIndex(x => x.id === coche.id);

    if (cocheIdx >= 0) {
      this.listadoDeCoches[cocheIdx] = coche;
    } else {
      this.idlength++;
      coche.id = this.idlength;
      this.listadoDeCoches.push(coche);
    }
  }



}

