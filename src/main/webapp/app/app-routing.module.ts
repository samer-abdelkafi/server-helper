import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';

import {HomeComponent} from './home/home.component'
import {DirectoryComponent} from './directory/directory.component'

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [

    {
        path: 'directory',
        component: DirectoryComponent,
        data: {title: 'Directory Page'}
    },

    {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Home Page'}
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
