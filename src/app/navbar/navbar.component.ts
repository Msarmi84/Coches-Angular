import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() cambiarVista = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVistaClick(): void{
    this.cambiarVista.emit();
   }

}
