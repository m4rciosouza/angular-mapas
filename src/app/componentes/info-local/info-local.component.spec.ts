import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLocalComponent } from './info-local.component';

describe('InfoLocalComponent', () => {
  let component: InfoLocalComponent;
  let fixture: ComponentFixture<InfoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
