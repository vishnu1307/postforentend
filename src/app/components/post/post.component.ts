import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  searchText;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.retrievepost();
  }

  retrievepost() {
    this.postService.getAll()
      .subscribe(
        data => {
          this.posts = data;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  search(){

  }
}
