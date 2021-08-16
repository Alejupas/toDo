import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly ROOT_URL = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getCarouselData(): Observable<{}>{
    return this.http.get(this.ROOT_URL + '/carouselItems')
  }
  
  getAllItemsData(): Observable<{}>{
    return this.http.get(this.ROOT_URL + '/items')
  }

  // deleteItems(){
  //   this.posts = this.http.delete(this.ROOT_URL + `/items/${id}`)
  // }
}