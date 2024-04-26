import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  constructor(private vehiculoService: VehiculoService) { }

  getCarsList(){
      this.vehiculoService.getCars().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getCarsList();
  }

}
