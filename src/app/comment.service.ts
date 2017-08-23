import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

  
  comments = [
  {title: 'Holla', author:'Jim Jones'},
  {title: 'Put a little tree right there', author:'Bob Ross'},
  {title: 'Thats fantastic', author:'Owen Wilson'}
  ];

  getComments() {
    return this.comments;
  }

  constructor() { }

}
