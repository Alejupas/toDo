import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
@Input() item: any | undefined;


constructor(private heroService:HeroService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getOneItem();
  }

  getOneItem(){
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.heroService.getItem(id).subscribe(item => {
      this.item = item;
    })
  }

  onDelete(id:number){
    this.heroService.deleteItem(id);
  }

  onEdit(id:number){
    console.log(this.item);
    const editedItem = {id: this.item.id, title: this.item.title, text: this.item.text, price: this.item.price, img: this.item.img}
    this.heroService.editItem(id, editedItem);
  }
}
