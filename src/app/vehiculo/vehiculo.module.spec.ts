import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoModule } from './vehiculo.module';
import { VehiculoComponent } from './vehiculo.component';

describe('VehiculoModule', () => {
  let pipe: VehiculoModule;
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [VehiculoModule]});
    pipe = TestBed.inject(VehiculoModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

});
