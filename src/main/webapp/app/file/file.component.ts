import {Component, OnInit} from '@angular/core';
import {FileService} from "./file.service";
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {File} from "../directory/file";



@Component({
    templateUrl: './file.html',
    styleUrls: ['./file.css']
})
export class FileComponent implements OnInit {

    file$: Observable<File>;

    constructor(private service: FileService, private router: Router, private route: ActivatedRoute) {
    }

    getFile() {
        this.file$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getFile(params.get('path')));
    }

    ngOnInit() {
        this.getFile();


    }
}