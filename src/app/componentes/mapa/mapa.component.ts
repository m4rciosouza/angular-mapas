import { Component, OnInit, OnDestroy } from '@angular/core';
import L from 'leaflet';
import { environment as env } from '../../../environments/environment';
import { Local } from '../../models/local.model';
import { LocalService } from '../../services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnDestroy {

  mapa: any;
  locais: Local[];

  constructor(
    private localService: LocalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([35.403430, 17.681967], 3);
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoom: 19 }).addTo(this.mapa);

    this.localService.obterLocais().subscribe(
      dados => {
        this.locais = dados as Local[];
        this.adicionarMarkers();
      },
      err => alert('Erro obtendo dados dos locais, tente novamente mais tarde.')
    );

  }

  ngOnDestroy() {
    this.mapa.invalidateSize();
  }

  adicionarMarkers() {
    const markers = [];
    this.locais.forEach(local => markers.push(L.marker(local.latlng).addTo(this.mapa)));
    markers.forEach(marker => marker.on('click',
      (e) => this.onMarkerClick(e, this.locais))
    );
  }

  onMarkerClick(e, locais) {
      const local = locais.find(local =>
          (local.latlng[0] === e.latlng.lat && local.latlng[1] === e.latlng.lng));
      this.router.navigate([`/info-local/${local.latlng}`]);
  }

}
