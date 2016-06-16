import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {LoginComponent} from './+login/login.component';
import { HomeComponent } from './+home/home.component';

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
    title = 'SICE Elfec';
}
