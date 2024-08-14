import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { DecodejwtService } from '../service/decode-jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: DecodejwtService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return this.router.createUrlTree(['']);
    }

    const roleAttendu = route.data['role'] as string;
    const rolePerson = this.authService.getRoleFromToken(token);
    console.log('role' + rolePerson);

    if (rolePerson === roleAttendu) {
      return true;
    } else {
        localStorage.removeItem('jwt')
      return this.router.createUrlTree(['']);
    }
  }
}
