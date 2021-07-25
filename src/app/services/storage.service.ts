import { Injectable } from '@angular/core';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  readData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  writeData(key: string, data: User) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
