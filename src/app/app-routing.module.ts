import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaComponent } from './componentes/mapa/mapa.component';
import { InfoLocalComponent } from './componentes/info-local/info-local.component';


const routes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'info-local/:latlng', component: InfoLocalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
