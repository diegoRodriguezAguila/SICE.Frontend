import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SiceFrontendAppComponent } from './app/sice-frontend.component';
import { environment } from './app/environment';
//import { SiceFrontendAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(SiceFrontendAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);

