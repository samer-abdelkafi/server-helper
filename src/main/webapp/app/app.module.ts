import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {DirectoryModule} from "./directory/directory.module";
import {PageNotFoundComponent} from './not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {FileModule} from "./file/file.module";


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        AppRoutingModule,
        HomeModule,
        DirectoryModule,
        FileModule
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
