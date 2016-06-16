import { Component } from '@angular/core';
import { Router, Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {LoginComponent} from "./+login/login.component";
import { HomeComponent } from './+home/home.component';
import { AuthenticationService } from './services/authentication.service';
@Component({
    moduleId: module.id,
    selector: 'sice-frontend-app',
    templateUrl: 'sice-frontend.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/login', component: LoginComponent},
    {path: '/home', component: HomeComponent}
])
export class SiceFrontendAppComponent {
    username: string;
    title = 'SICE Elfec';
    constructor(private router: Router,
                private authService: AuthenticationService) {
        this.authService.onLoggedIn.subscribe(username => this.onLoggedIn(username));
        this.authService.onLoggedOut.subscribe(username => this.onLoggedOut(username));
    }

    ngOnInit() {
        if (this.isLogged()) {
            this.username = localStorage.getItem('username');
        }else{
            console.log("Not Logged");
            this.router.navigateByUrl('/login');
        }
    }

    isLogged(){
        return localStorage.getItem('jwt');
    }

    onLoggedIn(username: string) {
        this.username = username;
        this.router.navigateByUrl('/home');
    }

    onLoggedOut(username: string) {
        this.router.navigateByUrl('/login');
    }

    closeSession(){
        this.authService.logOut();
    }
}
