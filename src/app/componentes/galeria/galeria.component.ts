import { Component, OnInit, Input } from '@angular/core';
import { Imagem } from '../../models/imagem.model';
import PhotoSwipe from 'photoswipe';

declare var PhotoSwipeUI_Default: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input() imagens: Imagem[];

  constructor() { }

  ngOnInit(): void {
  }

  exibirGaleria(indice: number) {
    const pswpElem = document.querySelectorAll('.pswp')[0];
    const opcoes = { index: indice };
    const galeria = new PhotoSwipe(pswpElem, PhotoSwipeUI_Default, this.imagens, opcoes);
    galeria.init();
  }

}
