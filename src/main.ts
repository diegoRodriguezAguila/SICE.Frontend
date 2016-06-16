import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provide } from '@angular/core';
import { SiceFrontendAppComponent } from './app/sice-frontend.component';
import { environment } from './app/environment';
import { AuthConfig, AuthHttp } from 'angular2-jwt/angular2-jwt';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';

var apiValue = 'http://192.168.50.56:90/api';
if (environment.production) {
    enableProdMode();
    apiValue = 'https://sice.elfec.bo/api';
}

bootstrap(SiceFrontendAppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide('ApiEndpoint', {useValue: apiValue}),
    provide(AuthHttp, {
        useFactory: (http) => {
            return new AuthHttp(new AuthConfig({
                tokenName: 'jwt'
            }), http);
        },
        deps: [Http]
    })
]);

