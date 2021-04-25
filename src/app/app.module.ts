import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaCochesComponent } from './tabla-coches/tabla-coches.component';
import { TarjetasCocheComponent } from './tarjetas-coche/tarjetas-coche.component';
import { CocheComponent } from './coche/coche.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CocheEstadoDirective } from './coche-estado.directive';
import { CarFormComponent } from './car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    TablaCochesComponent,
    TarjetasCocheComponent,
    CocheComponent,
    NavbarComponent,
    FooterComponent,
    CocheEstadoDirective,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
