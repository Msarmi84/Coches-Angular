import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaCochesComponent } from './tabla-coches/tabla-coches.component';
import { TarjetasCocheComponent } from './tarjetas-coche/tarjetas-coche.component';
import { CocheComponent } from './coche/coche.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaCochesComponent,
    TarjetasCocheComponent,
    CocheComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
