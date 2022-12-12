import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OptionsComponent } from './home/options/options.component';
import { ScoreComponent } from './home/score/score.component';
import { dataService } from './home/data.service';
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'score', component: ScoreComponent},
  { path: 'not-found', component: PagenotfoundComponent},
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ScoreComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
