/**
 * Created by drodriguez on 22/06/2016.
 */
import { RouterConfig }          from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';

export const HomeRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];
