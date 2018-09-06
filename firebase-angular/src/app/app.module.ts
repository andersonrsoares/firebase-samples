import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
=======
    BrowserModule.withServerTransition( {appId: 'something-unique'}),
>>>>>>> 78ac98fe730eeb0ddcea0e9513aaf2ff65949703
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
