import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { GetTarefas } from '../tarefas.service';


export interface Tarefinha{
    nome: string;
    tempo: number;
}


@Component({
    selector: 'tk-form-tarefa',
    templateUrl: './form-tarefa.component.html'
})
export class FormTarefaComponent implements OnInit {


    @Input() valueTempo: number = 0
    @Input() valueDesc: string = ''

    constructor(private tkService: GetTarefas){}

    ngOnInit(): void {
    }
    
    tempoKeyUp(event: any){
        this.valueTempo = event.target.value
        console.log(this.valueTempo)
    }

    descKeyUp(event: any){
        this.valueDesc = event.target.value.toString()
        console.log(this.valueDesc)

    }

    createNewTask(){
        const tarefa: Tarefa = {
            nome: this.valueDesc,
            tempo: this.valueTempo,
            comecou: {
                'status': false,
                'tempoRestante': this.valueTempo
            },
            concluido: false

        }

        this.tkService.createNewTarefa(tarefa).subscribe(data => console.log(data))
    }

}