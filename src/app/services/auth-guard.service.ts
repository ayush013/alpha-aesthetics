import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,  CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ServerInteractionService } from './server-interaction.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private ServerInteractionService: ServerInteractionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.ServerInteractionService.isAuthenticated()
          .then(
            (authenticated) => {
              if (authenticated) {
                return true;
              } else {
                this.router.navigate(['/']);
              }
            }
          );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
