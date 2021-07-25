import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CustomParams, Post } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  BASE_URL: string = "https://jsonplaceholder.typicode.com";

  getPosts(queryParam: CustomParams = {}) {
    if (Object.keys(queryParam).length) {
      const params = new HttpParams()
        .set("_start", queryParam.start.toString())
        .set("_limit", queryParam.limit.toString());
      return this.http.get<Post[]>(`${this.BASE_URL}/posts`, { params });
    } else
      return this.http.get<Post[]>(`${this.BASE_URL}/posts`);
  }
  getPostById(id: string) {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }
  getuserById(id: string) {
    return this.http.get(`${this.BASE_URL}/users/${id}`);
  }
  getCommentsById(id: string) {
    return this.http.get(`${this.BASE_URL}/posts/${id}/comments`);
  }
}
