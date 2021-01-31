import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { MostrarTarefasComponent } from './mostrar-tarefas.component';

@NgModule({
    declarations: [MostrarTarefasComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [MostrarTarefasComponent,]
})
export class MostrarTarefasModule{}