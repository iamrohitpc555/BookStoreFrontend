import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DisplaybookComponent } from './components/displaybook/displaybook.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdergreetingComponent } from './components/ordergreeting/ordergreeting.component';



const routes: Routes = [

  {
    path: '', redirectTo: 'Displaybook',
    pathMatch: 'full'
  },

  {path:"",component:DisplaybookComponent},
  {path:"index",component:DisplaybookComponent},
  {path:"Displaybook",component:DisplaybookComponent},
 


  {path:"cart",component:CartComponent},
  {path:"greeting",component:OrdergreetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
