import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/rendering/create/create.component'
import { AllitemsComponent } from './components/allitems/allitems.component';
import { EditComponent } from './components/rendering/edit/edit.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent },
  {path: 'allItems', component: AllitemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
