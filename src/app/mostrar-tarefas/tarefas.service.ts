import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Tarefa } from './tarefa.model'


@Injectable({
    providedIn: 'root',
})

export class GetTarefas{

    URL = "http://localhost:8000/tarefas/"

    constructor(private http: HttpClient){}

    getTarefas(){
        return this.http.get<Tarefa[]>(this.URL)
    }

    createNewTarefa(tarefa: Tarefa){

        const body: Tarefa = {
            nome: tarefa.nome,
            tempo: tarefa.tempo,
            concluido: tarefa.concluido,
            comecou: tarefa.comecou
        } 

        return this.http.post(
            this.URL,
            body
        )
    }

    deleteTask(id?: number){

        const finalURL = this.URL + id + '/'

        return this.http.delete(finalURL)
    }
}