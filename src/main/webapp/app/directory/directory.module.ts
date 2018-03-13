import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FilterList } from "./filterlist.pipe";

import {DirectoryComponent} from "./directory.component";
import {DirectoryService} from "./directory.service";
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule
    ],
    declarations: [
        DirectoryComponent,
        FilterList
    ],
    providers: [
        DirectoryService
    ]
})
export class DirectoryModule {}