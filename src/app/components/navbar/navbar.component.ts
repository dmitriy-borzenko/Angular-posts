import { Observable } from 'rxjs/internal/Observable';
import { AutheticationService } from './../../services/authetication.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLogin$: Observable<boolean>;
  time: Date;
  userName$: Observable<User>;
  userName: string;
  intervalId: any;

  constructor(private authService: AutheticationService) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.isLogin$ = this.authService.isLoggedIn;
    this.userName$ = this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
