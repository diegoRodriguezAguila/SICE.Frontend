/**
 * Created by drodriguez on 16/06/2016.
 */
import { Injectable, Inject, EventEmitter, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../shared/headers';

@Injectable()
export class AuthenticationService {
    @Output() onLoggedIn = new EventEmitter<string>();
    @Output() onLoggedOut = new EventEmitter<string>();
    public currentUser: string;

    constructor(public http:Http, @Inject('ApiEndpoint')
    private apiEndpoint:string) {
    }

    public login(username, password) {
        event.preventDefault();
        let body = JSON.stringify({username, password});
        this.http.post(`${this.apiEndpoint}/sessions`, body, {headers: contentHeaders})
            .subscribe(
                response => {
                    //noinspection TypeScriptUnresolvedVariable
                    let session = response.json();
                    localStorage.setItem('jwt', session.authentication_token);
                    localStorage.setItem('username', session.username);
                    this.currentUser = session.username;
                    this.onLoggedIn.emit(session.username);
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }

    public logOut() {
        let username = localStorage.getItem('username');
        let token = localStorage.getItem('jwt');
        if (token == null)
            this.onLoggedOut.emit(username);
        this.http.delete(`${this.apiEndpoint}/sessions/${token}`, {headers: contentHeaders})
            .subscribe(
                response => {
                    localStorage.removeItem('jwt');
                    localStorage.removeItem('username');
                    this.currentUser = null;
                    this.onLoggedOut.emit(username);
                },
                error => {
                    alert('No se pudo cerrar la sesión!');
                    console.log(error.text());
                }
            );
    }

    public isLoggedIn(){
        return localStorage.getItem('jwt') != null;
    }
}