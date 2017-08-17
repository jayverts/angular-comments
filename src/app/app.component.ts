import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
    {message: 'First Comment!', author: 'Jim Jones'},
    {message: 'Nice Work!', author: 'Harry Truman'},
    {message: 'I would also like to congratulate you!', author: "Xzibit"}
  ]
}
