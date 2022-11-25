import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  @Input() account: {name:string, status: string}

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    
  }

}
