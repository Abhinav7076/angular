import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../profile.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student_data: profile

  constructor() { }

  ngOnInit(): void {
  }

}
