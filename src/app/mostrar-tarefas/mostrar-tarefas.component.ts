import { Component, OnInit } from '@angular/core';
import { GetTarefas } from './tarefas.service';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'tk-mostrar-tarefas',
  templateUrl: './mostrar-tarefas.component.html',
  styleUrls: ['./mostrar-tarefas.component.css']
})
export class MostrarTarefasComponent implements OnInit {

  constructor(private tarefaService: GetTarefas) { }

  tarefas: Array<Tarefa> = []

  task: Tarefa = {
    nome: 'Limpar o quarto',
    tempo: 60,
    concluido: false,
    comecou: {
      'status': false,
      'tempoRestante': 60
    }
  }

  ngOnInit(): void {
    this.getTarefas()
    this.ordernarListaPorConcluido()
  }

  getTarefas(){
    this.tarefaService
        .getTarefas()
        .subscribe(data =>{
          console.log(data);
          this.tarefas = data
        })
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

  
  createNewTask(task: Tarefa){
    this.tarefaService.createNewTarefa(task).subscribe(data=>console.log(data))
  }

  deleteTask(id?: number){
    this.tarefaService.deleteTask(id).subscribe(data=>console.log)
  }
}
