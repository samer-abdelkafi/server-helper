import {Component, OnInit} from '@angular/core';
import {DirectoryService} from "./file.service";
import { Observable } from 'rxjs/Observable';





@Component({
    templateUrl: './file.html',
    styleUrls: ['./file.css']
})
export class FileComponent implements OnInit {

    files$: Observable<File[]>;

    constructor(private service: DirectoryService) {
    }

    getFiles() {
        //this.files$ = this.service.getFiles();
            //
            // .subscribe(
            //     resultArray => this.files$ = resultArray,
            //     error => console.log("Error :: " + error)
            // )
    }

    ngOnInit() {

        this.hero$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getHero(params.get('id')));
        this.getFiles();
    }
}