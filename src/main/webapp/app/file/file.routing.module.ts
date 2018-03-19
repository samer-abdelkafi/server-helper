import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent }       from './file.component';

const directoryRoutes: Routes = [
    { path: 'file', component: FileComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(directoryRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class FileRoutingModule {}