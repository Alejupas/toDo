import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
item: any;

  constructor(private heroService:HeroService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getOneItem();
  }

  onDelete(id:number){
    this.heroService.deleteItem(id);
  }

  getOneItem(){
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.heroService.getItem(id).subscribe(item => {
      this.item = item;
      console.log(item);
      
    })
  }
}
