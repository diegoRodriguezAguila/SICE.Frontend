/**
 * Created by drodriguez on 22/06/2016.
 */
import { Injectable }             from '@angular/core';
import { CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';
import { AuthenticationService }            from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(
        // Not using but worth knowing about
        next:  ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.authService.isLoggedIn()) { return true; }
        this.router.navigate(['/login']);
        return false;
    }
}