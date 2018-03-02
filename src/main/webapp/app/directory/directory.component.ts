import {Component, OnInit} from '@angular/core';
import {DirectoryService} from "./directory.service";
import { Observable } from 'rxjs/Observable';

import {File} from "./file"




@Component({
    templateUrl: './directory.html'
})
export class DirectoryComponent implements OnInit {

    files$: Observable<File[]>;

    constructor(private service: DirectoryService) {
    }

    getFiles() {
        this.files$ = this.service.getFiles();
            //
            // .subscribe(
            //     resultArray => this.files$ = resultArray,
            //     error => console.log("Error :: " + error)
            // )
    }

    ngOnInit() {
        this.getFiles();
    }
}