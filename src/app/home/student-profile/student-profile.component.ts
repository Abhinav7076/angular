import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../profile.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  @Input('pro') profile: {name: string, rollno: string, department: string}

  constructor() { }

  ngOnInit(): void {
  }

}
