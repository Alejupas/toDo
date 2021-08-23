import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Server } from '../../../service/server.service';


describe('PostService', () => {
  let postService: Server;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        Server
      ],
    });

    postService = TestBed.get(Server);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch Carousel posts with length to be 3`, (inject([HttpTestingController, Server],
    (httpClient: HttpTestingController, postService: Server) => {

      const postItem = [
        {
          "id": 1,
          "text": "Leather Jacket",
          "img": "https://cdn.shopify.com/s/files/1/0228/0911/6708/articles/leather-1.jpg?v=1572299598"
        },
        {
          "id": 2,
          "text": "Summer hat",
          "img": "https://st3.depositphotos.com/1092937/12928/i/950/depositphotos_129288056-stock-photo-handmade-weaved-straw-pattern.jpg"
        },
        {
          "id": 3,
          "text": "Nice T-Shirt",
          "img": "https://previews.123rf.com/images/mangpor2004/mangpor20041804/mangpor2004180400048/99992769-wrinkled-white-cotton-fabric-textured-background-fashion-pattern-textile-design-concept-background.jpg"
        }
      ];


      postService.getCarouselData()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      let req = httpMock.expectOne('http://localhost:3000/carouselItems');
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));
});