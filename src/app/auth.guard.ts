import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private session: SessionService ,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.session.getDoctorLoggedIn() === 'true') {
        return true;
      } else {
        if (this.session.getHospitalLoggedIn() === 'true') {
          this.router.navigate(['hDashboard']);
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }
  }
}
