import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {DirectoryComponent} from "./directory.component";
import {DirectoryService} from "./directory.service";


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DirectoryComponent
    ],
    providers: [
        DirectoryService
    ]
})
export class DirectoryModule {}