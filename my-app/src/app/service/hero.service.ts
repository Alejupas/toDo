import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}

// db address - localhost.. 
// call from component , constructor service 
// fn getItems , which should call service fn