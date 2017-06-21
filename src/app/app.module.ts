import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from "./header/header.module";
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    HeaderModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
