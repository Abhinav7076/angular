import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servername = 'Testserver'
  servers = []

  constructor() { }

  onCreateServer(){
    this.servers.push(this.servername)
  }

  ngOnInit(): void {
  }

}
