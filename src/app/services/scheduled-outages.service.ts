import { Injectable, Inject} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { contentHeaders } from '../shared/headers';
import '../shared/rxjs-operators';
import {Observable} from "rxjs/Observable";
import {ScheduledOutage} from "../models/scheduled-outage";

@Injectable()
export class ScheduledOutagesService {

    constructor(public authHttp:AuthHttp, @Inject('ApiEndpoint')
    private apiEndpoint:string) {
    }

    public getScheduledOutages(page:number = 1):Observable<ScheduledOutage[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.authHttp.get(`${this.apiEndpoint}/scheduled_outages?page=${page}`,
            {headers: contentHeaders})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public saveScheduledOutage(schOutage:ScheduledOutage):Observable<ScheduledOutage> {
        schOutage.power_poles = schOutage.power_poles.map(p => p.id);
        let body = JSON.stringify(schOutage);
        //noinspection TypeScriptUnresolvedFunction
        return this.authHttp.post(`${this.apiEndpoint}/scheduled_outages`, body, {headers: contentHeaders})
            .map(this.responseToSchOutage)
            .catch(this.handleError);
    }

    private responseToSchOutage(res:Response) {
        let d = res.json();
        //noinspection TypeScriptUnresolvedVariable
        d.start_date = new Date(d.start_date);
        //noinspection TypeScriptUnresolvedVariable
        d.end_date = new Date(d.end_date);
        return d;
    }

    private extractData(res:Response) {
        let body = res.json();
        let data = body.data;
        if (!data)
            return {};
        data.forEach((d) => {
            //noinspection TypeScriptUnresolvedVariable
            d.start_date = new Date(d.start_date);
            //noinspection TypeScriptUnresolvedVariable
            d.end_date = new Date(d.end_date);
        });
        return data;
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
