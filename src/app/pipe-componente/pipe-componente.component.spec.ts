import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponenteComponent } from './pipe-componente.component';

describe('PipeComponenteComponent', () => {
  let component: PipeComponenteComponent;
  let fixture: ComponentFixture<PipeComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
