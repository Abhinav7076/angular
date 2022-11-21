import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { }

  onAddStudent(){
    this.studentData.emit({
      name: this.newName,
      rollno: this.newRollNo,
      department: this.newDepartment
    })
  }

  ngOnInit(): void {
  }

}
