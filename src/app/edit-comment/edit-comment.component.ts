import { Component, OnInit, Input } from '@angular/core';

import {AppComponent} from '../app.component'

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() compentId;
  editMode;
  comment = '';
  author = '';

  save(compentId){
  	//alert(compentId)
  	this.editMode=false;
  	this.appComponent.comments[compentId].title = this.comment;
  	this.appComponent.comments[compentId].author = this.author;
  }

  constructor(private appComponent:AppComponent) {

  }

  ngOnInit() {
  }

}
