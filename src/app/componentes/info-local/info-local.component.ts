import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { InfoLocal } from '../../models/info-local.model';

@Component({
  selector: 'app-info-local',
  templateUrl: './info-local.component.html',
  styleUrls: ['./info-local.component.css']
})
export class InfoLocalComponent implements OnInit {

  infoLocal: InfoLocal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    const latlng: string = this.route.snapshot.paramMap.get('latlng');
    this.obterInfoLocal(latlng);
  }

  obterInfoLocal(latlng: string) {
    this.localService.obterInfoLocal(latlng).subscribe(
      infoLocal => this.infoLocal = infoLocal as InfoLocal,
      err => {
        alert('Erro obtendo dados.');
        this.router.navigate(['/']);
      }
    );
  }

  voltar() {
    this.router.navigate(['/']);
  }

}
