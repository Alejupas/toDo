import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';


@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  thumbnailsItems: any;
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getThumbnailsItems();
  }

  getThumbnailsItems(){
    this.heroService.getAllItemsData().subscribe(thumbnailsItems => {
      this.thumbnailsItems = thumbnailsItems;
      console.log(thumbnailsItems);
      
    })
  }

}
