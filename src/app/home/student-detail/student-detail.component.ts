import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { profile } from '../profile.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student_data: profile

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.student_data = new profile(this.route.snapshot.params['name'], this.route.snapshot.params['id'], '')
    //updating the parameters
    this.route.params.subscribe(
      (param: Params) => {
        this.student_data = new profile(param['name'], param['id'], '')
        console.log(param)
      }
    )
  }

  gotoEdit(){
    console.log(this.student_data)
    this.router.navigate(['/input', this.student_data.rollno, 'edit'])
  }

}
