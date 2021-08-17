import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationViewComponent } from './components/rendering/confirmation-view/confirmation-view.component';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './components/rendering/carousel/carousel.component';
import { CreateComponent } from './components/rendering/create/create.component'
import { AllitemsComponent } from './components/allitems/allitems.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'create', component: CreateComponent},
  {path: 'home', component: CarouselComponent },
  {path: 'allItems', component: AllitemsComponent },
  {path: 'confirmation', component: ConfirmationViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
