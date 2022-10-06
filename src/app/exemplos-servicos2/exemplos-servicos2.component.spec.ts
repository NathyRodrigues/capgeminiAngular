import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosServicos2Component } from './exemplos-servicos2.component';

describe('ExemplosServicos2Component', () => {
  let component: ExemplosServicos2Component;
  let fixture: ComponentFixture<ExemplosServicos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosServicos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosServicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
