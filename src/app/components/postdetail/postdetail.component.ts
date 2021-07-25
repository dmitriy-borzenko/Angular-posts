import { Observable } from 'rxjs/internal/Observable';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  id: string;
  post: Post;
  user: any;
  comments$:Observable<any>;
  constructor(private activateRoute: ActivatedRoute, private postService: PostService) {
    this.id = this.activateRoute.snapshot.params['id'];
  }
  
  ngOnInit(): void {
    const result = this.postService.getPostById(this.id)
    const httpResult$ = result.pipe(
      switchMap(value => {
        this.post = value;
        return this.postService.getuserById(value.userId);
      }
      )
    );
    httpResult$.subscribe(data => {
      this.user = data
    });
    this.comments$=this.postService.getCommentsById(this.id);
  }

  trackById (index,comment){
    return index;
  }
}
