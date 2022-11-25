import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {

  constructor() { }

  select(message: string){
    const service = new LoggingService()
    service.showStatus(message)
  }

  ngOnInit(): void {
  }

}
