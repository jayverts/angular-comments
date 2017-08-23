import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

import { FormsModule } from '@angular/forms';
import { CommentService } from './comment.service';
import { EditCommentComponent } from './edit-comment/edit-comment.component'

@NgModule({
  declarations: [
    AppComponent,
    NewCommentComponent,
    EditCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }