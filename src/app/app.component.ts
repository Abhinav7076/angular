import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "aps";
  title = 'my-dream-app';
  feature = ''

  select(feature: string){
    this.feature = feature
  }
}
