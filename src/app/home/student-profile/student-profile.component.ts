import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { profile } from '../profile.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  
  // @Input() profile: {name: string, rollno: string, department: string}
  @Output() student_data = new EventEmitter<profile>()

  profile: {name: string, rollno: string, department: string} = {name: 'Hero', rollno: '1', department: 'Finance'}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigate(){
    this.router.navigate(['/'])
  }

}
