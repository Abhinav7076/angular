import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularToastifyModule],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
