import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    private _url = "https://raw.githubusercontent.com/JeanGoncalves/desafio-front-end-infograficos/master/Arquivos/JSON/";
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor (
        private http: Http
    ) {}

    getNews (): Promise<any>{
        return this.http.get(this._url + 'noticias.json')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getSlides () {
        return this.http.get(this._url + 'slide.json')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}