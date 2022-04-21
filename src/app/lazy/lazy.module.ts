import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LazyRoutingModule} from './lazy-routing.module';
import {LazyComponent} from './components/lazy/lazy.component';
import {APP_BASE_HREF_PROVIDER} from "../const/app.base-href.provider";


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
    APP_BASE_HREF_PROVIDER
  ]
})
export class LazyModule {
}
