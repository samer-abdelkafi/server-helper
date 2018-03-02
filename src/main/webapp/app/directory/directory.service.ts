import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {File} from "./file"
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DirectoryService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getFiles(): Observable<Array<File>> {
        return this.http.get<Array<File>>('/api/files');
    }

}