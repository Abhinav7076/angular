import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dataService } from '../data.service';
import { profile } from '../profile.model';

@Component({
  selector: 'app-take-input',
  templateUrl: './take-input.component.html',
  styleUrls: ['./take-input.component.css']
})
export class TakeInputComponent implements OnInit {

  @Output() studentData = new EventEmitter<{name: string, rollno: string, department: string}>()
  newName = ''
  newRollNo = ''
  newDepartment = ''
  profile: profile

  constructor(private route: ActivatedRoute, private dataService: dataService) { }

  onAddStudent(){
    this.studentData.emit({
      name: this.newName,
      rollno: this.newRollNo,
      department: this.newDepartment
    })
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    const id = this.route.snapshot.params['id']
    this.profile = this.dataService.getData(id)
    console.log(this.profile)
  }

}
