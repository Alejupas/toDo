import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {
  carouselItems: any;
  constructor(private heroservice: HeroService) { }

  ngOnInit(): void {
    this.getCarouselItems()
  }
  getCarouselItems(): void {
    this.heroservice.getCarouselData().subscribe(carouselItems => {
      this.carouselItems = carouselItems
      console.log(carouselItems);
    })
  }
}

