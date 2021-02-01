import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasConcluidoComponent } from './tarefas-concluido.component';

describe('TarefasConcluidoComponent', () => {
  let component: TarefasConcluidoComponent;
  let fixture: ComponentFixture<TarefasConcluidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasConcluidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
