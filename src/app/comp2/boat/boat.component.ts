import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css'],
  providers: [LoggingService]
})
export class BoatComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  select(message: string){
    this.loggingService.showStatus(message)
  }

  ngOnInit(): void {
  }

}
