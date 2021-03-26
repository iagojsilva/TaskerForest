import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { MostrarTarefasComponent } from '../mostrar-tarefas.component';
import { BtnComecarComponent } from './btn-comecar/btn-comecar.component';
import { TarefasPendenteComponent } from './tarefas-pendente.component';

@NgModule({
    declarations: [
        TarefasPendenteComponent,
        BtnComecarComponent,
    ],

    imports: [
        CommonModule,
        AngularMaterialModule,
        HttpClientModule
    ],

    exports: [
        TarefasPendenteComponent
    ]
})
export class TarefaPendenteModule{}