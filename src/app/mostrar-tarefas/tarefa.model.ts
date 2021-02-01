import { Optional } from '@angular/core'

export interface Tarefa{
    id?: number,
    nome: string,
    tempo: number,
    concluido: boolean,
    comecou: Comecou
}

export interface Comecou{
    status: boolean,
    tempoRestante: number
}