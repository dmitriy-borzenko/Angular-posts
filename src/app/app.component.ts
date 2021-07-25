import { StorageService } from './services/storage.service';
import { LOGIN } from './constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private storageService:StorageService){}
  ngOnInit(): void {
   this.storageService.writeData('login',LOGIN);
  }
 
}
