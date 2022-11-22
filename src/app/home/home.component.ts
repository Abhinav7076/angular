import { Component, Input, OnInit } from '@angular/core';
import { profile } from './profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles: profile[] = [
    new profile('Kohli', '1', 'History'),
    new profile('Stokes', '2', 'Physics'),
    new profile('Curran', '3', 'Chemistry'),
    new profile('Williamson', '4', 'Finance'),
    
  ]

  @Input() feature: string

  onStudentAdded(studentData: {name: string, rollno: string, department: string}){
    this.profiles.push({name: studentData.name, rollno: studentData.rollno, department: studentData.department})
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
