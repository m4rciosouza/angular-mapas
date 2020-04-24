import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { InfoLocalComponent } from './componentes/info-local/info-local.component';
import { HttpClientModule } from '@angular/common/http';
import { MapaLocalComponent } from './componentes/mapa-local/mapa-local.component';
import { ModalDescricaoLocalComponent } from './componentes/modal-descricao-local/modal-descricao-local.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    InfoLocalComponent,
    MapaLocalComponent,
    ModalDescricaoLocalComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
