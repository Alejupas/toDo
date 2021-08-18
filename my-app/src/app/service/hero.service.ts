import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  readonly ROOT_URL = 'http://localhost:3000';
  readonly ITEMS_URL = 'http://localhost:3000/items';

  httpOptions={headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  constructor(private http: HttpClient){}

  getCarouselData(): Observable<{}>{
    return this.http.get(this.ROOT_URL + '/carouselItems')
  }
  
  getAllItemsData(): Observable<{}>{
    return this.http.get(this.ITEMS_URL)
  }

  deleteItem(id:number){
    return this.http.delete((this.ITEMS_URL + `/${id}`), this.httpOptions).subscribe(()=> {
      console.log('delete successfull');
      
    })
  }
  
  getItem(id:number): Observable<{}>{
    return this.http.get(this.ITEMS_URL + `/${id}`)
  }

  // postItem(data: any): {
  //   return this.http.post(this.ITEMS_URL, data)
  //   .pipe(map)
  // }
}