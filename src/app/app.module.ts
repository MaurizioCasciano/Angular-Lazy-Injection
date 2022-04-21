import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF_PROVIDER} from "./const/app.base-href.provider";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    APP_BASE_HREF_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
