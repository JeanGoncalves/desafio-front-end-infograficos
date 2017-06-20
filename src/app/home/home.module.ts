import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { SlideComponent } from './slide/slide.component';
import { NewsComponent } from './news/news.component';
import { GraphComponent } from './graph/graph.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent, 
    SlideComponent, 
    NewsComponent, 
    GraphComponent, 
    MapComponent, 
    ContactComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
