import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import { contentHeaders } from '../shared/headers';
import {RouterLink} from '@angular/router/esm/src/directives/router_link';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

    constructor(public router:Router, public http:Http,
                @Inject('ApiEndpoint') private apiEndpoint:string) {
    }

    ngOnInit() {
        if (localStorage.getItem('jwt')) {
            this.router.navigateByUrl('/home');
        }
    }

    login(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({username, password});
        this.http.post(`${this.apiEndpoint}/sessions`, body, {headers: contentHeaders})
            .subscribe(
                response => {
                    //noinspection TypeScriptUnresolvedVariable
                    localStorage.setItem('jwt', response.json().authentication_token);
                    this.router.navigateByUrl('/home');
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }


}
