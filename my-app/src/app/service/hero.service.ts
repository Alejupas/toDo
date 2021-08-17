import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly ROOT_URL = 'http://localhost:3000';
  readonly ITEMS_URL = 'http://localhost:3000/items';

  constructor(private http: HttpClient){}

  getCarouselData(): Observable<{}>{
    return this.http.get(this.ROOT_URL + '/carouselItems')
  }
  
  getAllItemsData(): Observable<{}>{
    return this.http.get(this.ITEMS_URL)
  }

  deleteItem(id:number): Observable<{}>{
    return this.http.delete(this.ITEMS_URL + `/${id}`)
  }
  
  getItem(id:number): Observable<{}>{
    return this.http.get(this.ITEMS_URL + `/${id}`)
  }
}