import { Observable } from 'rxjs/internal/Observable';
import { Component,  OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  pageSize: number;
  pageIndex: number;
  postSizes: number;
  post$:Observable<Post[]>;
  postSizes$:Observable<number>;

  constructor(private postService: PostService) {
    this.pageSize = 5;
    this.pageIndex = 0;
  }

  ngOnInit(): void {
    //{ start: this.pageIndex, limit: this.pageSize }
    this.post$= this.postService.getPosts();
  }

  trackById(index, post) {
    return index;
  }
}

