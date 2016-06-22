/**
 * Created by drodriguez on 22/06/2016.
 */
import { AuthenticationService }        from '../services/authentication.service';
import { LoginComponent }     from './login.component';
import { AuthGuard} from '../guards/auth.guard';

export const LoginRoutes = [
    { path: 'login', component: LoginComponent }
];

export const AUTH_PROVIDERS = [AuthGuard, AuthenticationService];
