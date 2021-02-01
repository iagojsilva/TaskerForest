import { NgModule } from '@angular/core';
import {  MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";



@NgModule({
    exports:[
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatBadgeModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AngularMaterialModule{}