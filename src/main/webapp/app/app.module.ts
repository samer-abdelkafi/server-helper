import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';

import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {DirectoryModule} from "./directory/directory.module";
import {PageNotFoundComponent} from './not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
    ]
})
export class DemoMaterialModule {}


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        // MatButtonModule,
        // MatToolbarModule,
        // MatIconModule,
        // MatListModule,
        DemoMaterialModule,
        AppRoutingModule,
        HomeModule,
        DirectoryModule
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
