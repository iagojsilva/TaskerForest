import { NgModule } from '@angular/core';
import {  MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
    exports:[
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatBadgeModule
    ]
})
export class AngularMaterialModule{}