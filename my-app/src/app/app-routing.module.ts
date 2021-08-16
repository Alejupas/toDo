import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './components/rendering/carousel/carousel.component';
import { CreateComponent } from './components/rendering/create/create.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'create', component: CreateComponent},
  {path: 'home', component: CarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
