import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MountainService } from '../services/mountain.service';

@Injectable({
  providedIn: 'root'
})
export class MountainsLoadedGuard implements CanActivate {
  constructor(private mountainService: MountainService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.mountainService.getAll().then(() => true, () => false);
  }
}
