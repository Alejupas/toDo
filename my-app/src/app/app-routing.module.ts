import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/rendering/carousel/carousel.component';
import { ThumbnailsComponent } from './components/rendering/thumbnails/thumbnails.component';


const routes: Routes = [
  {path: 'carousel', component: CarouselComponent},
  {path: 'thumbnails', component: ThumbnailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CarouselComponent, ThumbnailsComponent]