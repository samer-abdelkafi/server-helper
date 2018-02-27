import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatIconModule} from '@angular/material'
import { Router } from '@angular/router';


import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {PageNotFoundComponent} from './not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,

        AppRoutingModule,
        HomeModule
    ],
    exports: [
        MatToolbarModule,
        MatToolbarModule,
        MatIconModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
