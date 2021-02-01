import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'tk-tarefas-pendente',
  templateUrl: './tarefas-pendente.component.html',
  styleUrls: ['./tarefas-pendente.component.css']
})
export class TarefasPendenteComponent implements OnInit {

  @Input() nome: string = ''
  @Input() tempo: number = 0
  @Input() concluido: boolean = false
  @Input() id: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
