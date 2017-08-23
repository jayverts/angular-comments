
import { Component } from '@angular/core';
import {CommentService} from './comment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  position;
  comments;
 
  deleteComment(position){
    //alert(position);
    this.commentService.comments.splice(position,1);
  }

  // editComment(position){
  //   this.commentService.comments[position].title = ;
  //   this.commentService.comments[position].author =  ;
  // }

  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
    };
}
