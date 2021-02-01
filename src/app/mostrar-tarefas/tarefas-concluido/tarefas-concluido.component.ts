import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tk-tarefas-concluido',
  templateUrl: './tarefas-concluido.component.html',
  styleUrls: ['./tarefas-concluido.component.css']
})
export class TarefasConcluidoComponent implements OnInit {

  @Input() nome: string = ''
  @Input() concluido: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
