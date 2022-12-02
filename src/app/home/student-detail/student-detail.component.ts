import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { dataService } from '../data.service';
import { profile } from '../profile.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student_data: profile

  constructor(private route: ActivatedRoute, private router: Router, private dataService: dataService) { }

  ngOnInit(): void {
    this.student_data = this.dataService.getData(this.route.snapshot.params['id'])
  }

  gotoEdit(){
    console.log(this.student_data)
    this.router.navigate(['/input', this.student_data.rollno, 'edit'])
  }

}
