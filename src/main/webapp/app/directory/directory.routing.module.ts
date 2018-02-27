import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent }       from './directory.component';

const directoryRoutes: Routes = [
    { path: 'directory', redirectTo: 'directory1'},
    { path: 'directory1', component: DirectoryComponent }
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
export class DirectoryRoutingModule {}