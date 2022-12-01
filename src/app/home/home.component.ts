import { Component, Input, OnInit } from '@angular/core';
import { dataService } from './data.service';
import { profile } from './profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles: profile[] = []
  selected_profile: profile

  @Input() feature: string

  onStudentAdded(studentData: {name: string, rollno: string, department: string}){
    this.profiles.push({name: studentData.name, rollno: studentData.rollno, department: studentData.department})
  }

  recieve(student_data: profile){
    this.selected_profile = student_data
  }
  
  constructor(private dataService: dataService) { }

  ngOnInit() {
    this.profiles = this.dataService.profiles
    console.log(this.dataService.profiles)
  }

}
