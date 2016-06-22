import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide} from '@angular/core';
import { AppComponent }         from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { environment } from './app/environment';
import { AuthConfig, AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import * as moment from 'moment';

var apiValue = 'http://192.168.50.56:90/api';
if (environment.production) {
    enableProdMode();
    apiValue = 'https://sice.elfec.bo/api';
}
moment.locale('es');
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
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

