import { Injectable, Inject} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { contentHeaders } from '../shared/headers';
import '../shared/rxjs-operators';
import {Observable} from "rxjs/Observable";
import {PowerPole} from "../models/power-pole";

@Injectable()
export class PowerPolesService {

    constructor(public authHttp:AuthHttp, @Inject('ApiEndpoint')
    private apiEndpoint:string) {
    }

    public getPowerPoles(poleCodeFilter:string):Observable<PowerPole[]> {
        //noinspection TypeScriptUnresolvedFunction
        let url = `${this.apiEndpoint}/power_poles`;
        if (poleCodeFilter != null && poleCodeFilter.length > 0)
            url += `?pole_code=${poleCodeFilter}`;
        //noinspection TypeScriptUnresolvedFunction
        return this.authHttp.get(url,
            {headers: contentHeaders})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        console.log(body.data);
        return body.data;
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
