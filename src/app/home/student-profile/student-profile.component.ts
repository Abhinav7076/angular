import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { profile } from '../profile.model';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from '../data.service';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  
  // @Input() profile: {name: string, rollno: string, department: string}
  // @Output() student_data = new EventEmitter<profile>()

  profiles: profile[]

  constructor(private router: Router, private route: ActivatedRoute, private dataService: dataService) { }

  ngOnInit(): void {
    this.profiles = this.dataService.profiles
  }
  
  navigate(){
    this.router.navigate(['/'], {relativeTo: this.route})
  }

}
