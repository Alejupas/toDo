import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly ROOT_URL = 'http://localhost:3000';

  posts: any;

  constructor(private http: HttpClient){}

  getCarouselData(){
    this.posts = this.http.get(this.ROOT_URL + '/carouselItems')
  }
}
