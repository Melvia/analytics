import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatTabsModule} from "@angular/material/tabs";
import {PlannedOperationsModule} from "./planned-operations/planned-operations.module";
import {TabsComponent} from "./planned-operations/tabs-component/tabs.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlannedOperationsModule,
    TabsComponent,

  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
