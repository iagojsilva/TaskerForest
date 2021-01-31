import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTarefasComponent } from './mostrar-tarefas.component';

describe('MostrarTarefasComponent', () => {
  let component: MostrarTarefasComponent;
  let fixture: ComponentFixture<MostrarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
