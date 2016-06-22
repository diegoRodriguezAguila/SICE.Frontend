/**
 * Created by drodriguez on 22/06/2016.
 */
import { provideRouter, RouterConfig }  from '@angular/router';


import {LoginRoutes, AUTH_PROVIDERS} from "./+login/login.routes";
import { HomeRoutes} from './+home/home.routes';


export const routes: RouterConfig = [
    ...HomeRoutes,
    ...LoginRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS
];
