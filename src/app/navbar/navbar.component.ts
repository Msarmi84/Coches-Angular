import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() esTemaOscuro: boolean;

  @Output() cambiarVista = new EventEmitter();
  @Output() cambiarTema = new EventEmitter();
  @Output() verForm = new EventEmitter();
  txtBotonForm = 'Ver formulario';


  constructor() { }

  ngOnInit(): void {
  }

  cambiarVistaClick(): void{
    this.cambiarVista.emit();
   }

   cambiarTemaClick(): void{
    this.cambiarTema.emit();
   }

   cambiarFormClick(): void {
    this.verForm.emit();
    this.txtBotonForm = !this.txtBotonForm ?  'Ver formulario' : 'Ocultar Formulario';


   }


}
