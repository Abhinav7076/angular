import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/account.service';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css'],
  // providers: [LoggingService]
})
export class BoatComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountService: AccountsService) { }

  select(message: string){
    this.loggingService.showStatus(message)
  }

  addAccount(){
    this.accountService.addAccount('tom', 'running')
  }

  ngOnInit(): void {
  }

}
