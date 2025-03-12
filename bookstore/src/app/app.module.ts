import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookService } from './services/book.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
  
    HomeComponent,
        BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BookService, provideHttpClient()],
  bootstrap: [HomeComponent]
})
export class AppModule { }
