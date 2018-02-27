import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }       from './home.component';

const homeRoutes: Routes = [
    { path: 'home', redirectTo: 'home1'},
    { path: 'home1', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class HomeRoutingModule {}