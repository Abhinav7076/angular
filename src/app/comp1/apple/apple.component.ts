import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/account.service';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  @Input() account: {name: string, status: string}

  content_recieve = 'gg'

  constructor(private loggingService: LoggingService, private accountService: AccountsService) { 
    this.accountService.content.subscribe(
      (status: string) => this.content_recieve = status //receiving in a function
    )
  }

  ngOnInit(): void {
    
  }

}
