import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly ROOT_URL = 'http://localhost:3000';

  posts: any;

  constructor(private http: HttpClient){}

  getCarouselData(){
    this.posts = this.http.get(this.ROOT_URL + '/carouselItems')
  }
}

// db address - localhost.. 
// call from component constructor service 
// fn getItems , which should call service fn