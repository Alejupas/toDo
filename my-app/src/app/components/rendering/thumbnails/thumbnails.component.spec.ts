import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Server } from 'src/app/service/server.service';
import { ThumbnailsComponent } from './thumbnails.component';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const thumbnailItemsAll =  [
    {
      "id": 2,
      "title": "New Naik collection",
      "text": "They were sold out in few days! But we have some spare left.",
      "price": "20.99",
      "img": "https://m.media-amazon.com/images/I/414nzlV-wvL.jpg"
    },
    {
      "id": 4,
      "title": "UK mainland division",
      "text": "7Eleven",
      "price": "7.11",
      "img": "http://familywealthadvisory.com/wordpress/wp-content/uploads/2017/10/Plane-200x200.png"
    },
    {
      "id": 6,
      "title": "Flight",
      "text": "7Eleven",
      "price": "7.11",
      "img": "http://familywealthadvisory.com/wordpress/wp-content/uploads/2017/10/Plane-200x200.png"
    },
    {
      "id": 7,
      "title": "Apples 1kg",
      "text": "Skanus lietuviski obuoliai is Jono ukio Silaleje",
      "price": 1.89,
      "img": "http://www.flinchbaughsorchard.com/wp-content/uploads/2014/02/pink-lady-apple.jpg"
    },
    {
      "id": 9,
      "title": "Basketball Tarmak Defenders",
      "text": "Specialus, kokybiskas ir geras.",
      "price": 5.99,
      "img": "https://contents.mediadecathlon.com/p1914256/k$972494cb93e4cea0cea5663af983c5fe/men-s-size-7-ages-13-and-up-beginner-basketball-red.jpg?&f=200x200"
    }
  ]

});
