
//import { HeaderComponent } from './header.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FuterComponent } from './futer/futer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenifoodComponent } from './menifood/menifood.component';
import { FormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { OneMeniFoodComponent } from './one-meni-food/one-meni-food.component'; 




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FuterComponent,
    HomeComponent,
    ContactComponent,
    MenifoodComponent,
    EmailComponent,
    SearchPipe,
    OneMeniFoodComponent
   
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
    
    
   
  ],
  
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FuterComponent]
})
export class AppModule { }
