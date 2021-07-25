import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private curUser:BehaviorSubject<User> = new BehaviorSubject<User>(null);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get currentUser () {
    return this.curUser.asObservable();
  }

  constructor(
    private router: Router,
    private storageService:StorageService
  ) {}

  login(user: User) {
    const login = this.storageService.readData('login');
    if ((user.email === login.email) && (user.password === login.password)) {
      this.loggedIn.next(true);
      this.curUser.next(user);
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}
