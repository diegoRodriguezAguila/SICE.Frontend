import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import { contentHeaders } from '../shared/headers';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    directives: [MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LoginComponent implements OnInit {

    @Output() onLoggedIn = new EventEmitter<string>();

    constructor(public router:Router,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
    }

    login(event, username, password) {
        event.preventDefault();
        this.authService.login(username, password);
    }


}
