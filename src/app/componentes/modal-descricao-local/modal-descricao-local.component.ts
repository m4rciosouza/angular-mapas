import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-descricao-local',
  templateUrl: './modal-descricao-local.component.html',
  styleUrls: ['./modal-descricao-local.component.css']
})
export class ModalDescricaoLocalComponent implements OnInit {

  @Input() nome: string;
  @Input() descricao: string;

  constructor() { }

  ngOnInit(): void {
  }

}
