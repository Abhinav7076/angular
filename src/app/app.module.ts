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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'students', component: StudentProfileComponent},
  { path: 'students/:id', component: StudentDetailComponent},
  { path: 'input/add', component: TakeInputComponent},
  { path: 'input/:id/edit', component: TakeInputComponent},
  { path: 'not-found', component: PagenotfoundComponent},
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudentProfileComponent,
    TakeInputComponent,
    StudentDetailComponent,
    PagenotfoundComponent
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
