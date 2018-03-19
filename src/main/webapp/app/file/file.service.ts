import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {File} from "../directory/file";


@Injectable()
export class FileService {

    constructor(private http: HttpClient) {
    }

    // Uses http.get() to load data from a single API endpoint
    getFile(path: string): Observable<File> {
        var file: File;
        file = new File("foo", "foo.txt", 0, "10");
        return Observable.of(file);
    }

}