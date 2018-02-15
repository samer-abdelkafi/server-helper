import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import { Router } from '@angular/router';


import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {PageNotFoundComponent} from './not-found.component';





@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        AppRoutingModule,
        HomeModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
