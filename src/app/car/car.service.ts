import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
  })
export class CarService {
private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }
    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>(this.apiUrl);
    }
}
