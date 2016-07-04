import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES , Router}  from '@angular/router';
import {LoginComponent} from "./+login/login.component";
import { OutageListComponent } from './+outages/outage-list.component';
import {AuthenticationService} from './services/authentication.service';
import {ScheduledOutagesService} from './services/scheduled-outages.service'
import {PowerPolesService} from './services/power-poles.service'

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers:  [
        ScheduledOutagesService,
        AuthenticationService,
        PowerPolesService
    ],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    username: string;
    title = 'SICE Elfec';
    constructor(public router: Router,
                private authService: AuthenticationService) {
        this.authService.onLoggedIn.subscribe(username => this.onLoggedIn(username));
        this.authService.onLoggedOut.subscribe(username => this.onLoggedOut(username));
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.username = localStorage.getItem('username');
        }
    }

    onLoggedIn(username: string) {
        this.username = username;
        this.router.navigate(['/outages']);
    }

    onLoggedOut(username: string) {
        this.router.navigate(['/login']);
    }

    closeSession(){
        this.authService.logOut();
    }
}
