import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import {RouterModule , Routes} from '@angular/router';
import { DetailComponent } from '../home/detail/detail.component';

const routes : Routes = [ 
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'home/datail/:id',component:DetailComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class RoutingModule { }
