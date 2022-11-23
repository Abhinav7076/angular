import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { basicHighlight } from './custom-directive/basic_highlight.directive';
import { BetterHighlightDirective } from './custom-directive/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlight,
    BetterHighlightDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
