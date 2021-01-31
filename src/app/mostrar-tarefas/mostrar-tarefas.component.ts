import { Component, OnInit } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'tk-mostrar-tarefas',
  templateUrl: './mostrar-tarefas.component.html',
  styleUrls: ['./mostrar-tarefas.component.css']
})
export class MostrarTarefasComponent implements OnInit {

  constructor() { }

  tarefas: Array<Tarefa> = [
    {
      'nome': 'Tomar Banho',
      'tempo': 25,
      'concluido': true,
      'comecou': {
        'status': false,
        'tempoRestante': 0
      }
    },
    {
      'nome': 'Beber Agua',
      'tempo': 15,
      'concluido': false,
      'comecou': {
        'status': false,
        'tempoRestante': 0
      }
    },
    {
      'nome': 'Arrumar a Cama',
      'tempo': 60,
      'concluido': false,
      'comecou': {
        'status': false,
        'tempoRestante': 0
      }
    },
    {
      'nome': 'Leitura',
      'tempo': 5,
      'concluido': false,
      'comecou': {
        'status': true,
        'tempoRestante': 0
      }
    },

]


  ngOnInit(): void {
    this.ordernarListaPorConcluido()
  }


  ordernarListaPorConcluido(){
    console.log('lista: ', this.tarefas)
    this.tarefas.forEach(el => {
      if(!el.concluido){
        const start = this.tarefas.indexOf(el)
        this.tarefas.splice(start, start+1)
        this.tarefas.unshift(el)
      }
    });
  }


}
