import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
  })
export class VehiculoService {
private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }
    getCars(): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(this.apiUrl);
    }
}
