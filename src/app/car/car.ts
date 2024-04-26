export class Car {
  id!: number;
  marca!: String;
  linea!: String;
  referencia!: String;
  modelo!: number;
  kilometraje!: number;
  color!: String;
  imagen!: String;
  
  constructor(id: number,marca: String,linea: String,referencia: String,modelo: number,kilometraje: number,color: String,imagen: String) {
    this.id=id,
    this.marca=marca,
    this.linea=linea,
    this.referencia=referencia,
    this.modelo=modelo,
    this.kilometraje=kilometraje,
    this.color=color,
    this.imagen=imagen
  }
}
