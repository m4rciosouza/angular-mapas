import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { Local } from '../models/local.model';
import { InfoLocal } from '../models/info-local.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(
    private http: HttpClient
  ) { }

  obterLocais(): Observable<Local[]> {
    return this.http.get<Local[]>(
      `${env.API_URL_BASE}locais?apiKey=${env.API_KEY}`
    );
  }

  obterInfoLocal (latlng: string): Observable<InfoLocal> {
    return this.http.get<InfoLocal>(
      `${env.API_URL_BASE}info-local/${latlng}?apiKey=${env.API_KEY}`
    );
  }

}
