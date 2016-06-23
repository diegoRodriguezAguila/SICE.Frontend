/**
 * Created by drodriguez on 22/06/2016.
 */
import { RouterConfig }          from '@angular/router';
import { OutageListComponent } from './outage-list.component';
import { AuthGuard } from '../guards/auth.guard';

export const OutagesRoutes:RouterConfig = [
    {
        path: '',
        redirectTo: '/outages',
        terminal: true
    },
    {
        path: 'outages',
        component: OutageListComponent,
        canActivate: [AuthGuard]
    }
];
