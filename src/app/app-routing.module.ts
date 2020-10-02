import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenifoodComponent } from './menifood/menifood.component';
import { OneMeniFoodComponent } from './one-meni-food/one-meni-food.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'menu',
    component : MenifoodComponent
  },
  {
    path : 'menu/:id',
    component : OneMeniFoodComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
