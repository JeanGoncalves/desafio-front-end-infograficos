import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SlideComponent } from './slide/slide.component';
import { NewsComponent } from './news/news.component';
import { GraphComponent } from './graph/graph.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4FQ9Lmt4IwhYpeFoK_YDKvxsDuX_21qk'
    }),
    ReactiveFormsModule,
    HttpModule
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
