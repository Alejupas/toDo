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

  deleteItem(id:number): Observable<{}>{
    return this.http.delete(this.ROOT_URL + `/items/${id}`)
  }

  // updateItems(id: string){
  //   patch(this.ROOT_URL + `/items/${id}`: string, body: any | null, options?: {
  //     headers?: HttpHeaders | {
  //         [header: string]: string | string[];
  //     };
  //     context?: HttpContext;
  //     observe?: 'body';
  //     params?: HttpParams | {
  //         [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  //     };
  //     reportProgress?: boolean;
  //     responseType?: 'json';
  //     withCredentials?: boolean;
  // }): Observable<Object>;
  // }
}