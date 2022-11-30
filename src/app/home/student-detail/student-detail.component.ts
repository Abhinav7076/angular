import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profile } from '../profile.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student_data: profile

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.student_data = new profile(this.route.snapshot.params['id'], this.route.snapshot.params['name'], '')
  }

}
