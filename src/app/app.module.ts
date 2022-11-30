import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentProfileComponent } from './home/student-profile/student-profile.component';
import { TakeInputComponent } from './home/take-input/take-input.component';
import { StudentDetailComponent } from './home/student-detail/student-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'output', component: StudentProfileComponent},
  { path: 'input', component: TakeInputComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudentProfileComponent,
    TakeInputComponent,
    StudentDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
