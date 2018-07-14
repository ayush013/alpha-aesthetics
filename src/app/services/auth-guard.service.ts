import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,  CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ServerInteractionService } from './server-interaction.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private ServerInteractionService: ServerInteractionService, private router: Router) {}

  loggedIn = false;

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.ServerInteractionService.isAuthenticated()
    .subscribe(
      (response) => { console.log(response)
      if(response.status === 200)
        { this.loggedIn = true }
      },
      (error) => console.log(error)
    )
    if(this.loggedIn === true) { return true; }
    else { this.router.navigate(['/']); }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
