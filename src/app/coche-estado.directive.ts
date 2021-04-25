import { Directive, ElementRef, EventEmitter, HostListener, Renderer2, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCocheEstado]'
})
export class CocheEstadoDirective {

  text: HTMLTitleElement;

  @Input ()appCocheEstado: string;

  @Output () iconoPulsado = new EventEmitter<string>();


  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    const icono = this.renderer.createElement('icono');
    this.renderer.addClass( icono, 'fa');

    // en funcion del estado añadimos una clase y cambimos color
    if (this.appCocheEstado === 'nuevo') {
      this.renderer.addClass( icono, 'fa-car');
      this.renderer.setStyle( icono, 'color', 'rgba(7, 101, 122, 0.351');

    } else if (this.appCocheEstado === 'segunda mano'){
      this.renderer.addClass( icono, 'fa-car-crash');
      this.renderer.setStyle( icono, 'color', 'pink');
    }

    // ESCUCHAMOS EVENTO CLICK
    this.renderer.listen(icono, 'click', () => {
      this.iconoPulsadoClick();
    });

    // LO MANDAMOS AL DOM
    this.renderer.appendChild(this.element.nativeElement, icono);
  }
  iconoPulsadoClick(): void {
    console.log('iconoPulsadoClick');
    this.iconoPulsado.emit(`El coche es ${this.appCocheEstado}`);
  }


  @HostListener('mouseenter')
  elRatonEntra(): void {
    this.text = this.renderer.createElement('text');

    this.text.textContent = 'Quieres ver más información del coche?';

    this.renderer.appendChild(this.element.nativeElement, this.text);

  }

  @HostListener('mouseleave')
  elRatonSale(): void {
    if (this.text) {
      this.renderer.removeChild(this.element.nativeElement, this.text);
    }
  }


}
