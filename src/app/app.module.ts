import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';
import { AppleComponent } from './comp1/apple/apple.component';
import { BoatComponent } from './comp2/boat/boat.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    BoatComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
