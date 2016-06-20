import { Injectable, Inject} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { contentHeaders } from '../shared/headers';
import '../shared/rxjs-operators';
import {Observable} from "rxjs/Observable";
import {ScheduledOutage} from "../models/scheduled-outage";

@Injectable()
export class ScheduledOutagesService {

    constructor(public http:Http, @Inject('ApiEndpoint')
    private apiEndpoint:string) {
    }

    public getScheduledOutages(page:number = 1): Observable<ScheduledOutage[]>  {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(`${this.apiEndpoint}/scheduled_outages?page=${page}`,
            {headers: contentHeaders})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
