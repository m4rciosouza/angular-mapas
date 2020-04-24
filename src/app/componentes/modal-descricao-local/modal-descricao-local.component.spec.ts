import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDescricaoLocalComponent } from './modal-descricao-local.component';

describe('ModalDescricaoLocalComponent', () => {
  let component: ModalDescricaoLocalComponent;
  let fixture: ComponentFixture<ModalDescricaoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDescricaoLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDescricaoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
