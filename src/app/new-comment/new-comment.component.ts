import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  comment = '';
  author = '';

  postComment() {
  	//alert(this.author);
  	this.appComponent.comments.push({title:this.comment,author:this.author});
  }	
  constructor(private appComponent:AppComponent) { }

  ngOnInit() {
  }

}