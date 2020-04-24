import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaLocalComponent } from './mapa-local.component';

describe('MapaLocalComponent', () => {
  let component: MapaLocalComponent;
  let fixture: ComponentFixture<MapaLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
