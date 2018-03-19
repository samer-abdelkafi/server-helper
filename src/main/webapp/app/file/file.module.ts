import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';
import {FileComponent} from "./file.component";
import {FileService} from "./file.service";


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule
    ],
    declarations: [
        FileComponent,
    ],
    providers: [
        FileService
    ]
})
export class FileModule {}