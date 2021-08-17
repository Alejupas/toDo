import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { ThumbnailsComponent } from '../thumbnails/thumbnails.component';

@Component({
  selector: 'app-confirmation-view',
  templateUrl: './confirmation-view.component.html',
  styleUrls: ['./confirmation-view.component.scss']
})


export class ConfirmationViewComponent implements OnInit {
  confirmationWindow: any;
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }

    deleteOneItem (id:number) {
      this.heroService.deleteItem(id).subscribe(confirmationWindow =>{
        this.confirmationWindow = confirmationWindow;
      })
      return this.confirmationWindow.filter((v:number, i:number)=> i !== id);
    }
}
