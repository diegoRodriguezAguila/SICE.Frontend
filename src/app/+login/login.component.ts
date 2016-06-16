import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import { contentHeaders } from '../shared/headers';
import {RouterLink} from '@angular/router/esm/src/directives/router_link';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

    @Output() onLoggedIn = new EventEmitter<string>();

    constructor(public router:Router,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
        if (localStorage.getItem('jwt')) {
            this.router.navigateByUrl('/home');
        }
    }

    login(event, username, password) {
        event.preventDefault();
        this.authService.login(username, password);
    }


}
