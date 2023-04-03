import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { Usuarios } from '../models/Usuarios';
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {
    usuarioApiUrl = 'https://localhost:44347/api/Usuarios'
  constructor(private http: HttpClient) { }

  getElements(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.usuarioApiUrl);
  }
}