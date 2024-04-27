import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { VehiculoComponent } from './vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from './vehiculo';

describe('VehiculoComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VehiculoComponent],
      providers: [{ provide: VehiculoService}]
    });
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    component.vehiculos = [
      new Vehiculo(1, 'Toyota', 'Camry', '2022', 2022, 10000, 'Negro', 'toyota.jpg'),
      new Vehiculo(2, 'Honda', 'Civic', '2021', 2021, 15000, 'Blanco', 'honda.jpg'),
      new Vehiculo(3, 'Ford', 'Fusion', '2020', 2020, 20000, 'Gris', 'ford.jpg')
    ];
    

    fixture.detectChanges();
  });


  it('can load instance', () => {
    expect(component).toBeTruthy();
  });


  describe('getCarsList', () => {
    it('makes expected calls', () => {
      const vehiculoServiceStub: VehiculoService = fixture.debugElement.injector.get(
        VehiculoService
      );
      spyOn(vehiculoServiceStub, 'getCars').and.callThrough();
      component.getCarsList();
      expect(vehiculoServiceStub.getCars).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getCarsList').and.callThrough();
      component.ngOnInit();
      expect(component.getCarsList).toHaveBeenCalled();
    });
  });

  it('should display table with three rows', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('.custom-table tbody tr');
    expect(tableRows.length).toBe(3);
  });

  it('should display table header', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('.custom-table thead tr');
    expect(tableRows.length).toBe(1);
  });
});
