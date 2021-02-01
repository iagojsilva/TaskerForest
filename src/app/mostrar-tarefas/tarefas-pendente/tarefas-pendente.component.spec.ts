import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasPendenteComponent } from './tarefas-pendente.component';

describe('TarefasPendenteComponent', () => {
  let component: TarefasPendenteComponent;
  let fixture: ComponentFixture<TarefasPendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasPendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasPendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
