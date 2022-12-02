import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  edit=false
  profile: profile

  constructor(private route: ActivatedRoute, private dataService: dataService, private router: Router) { }

  onAddStudent(){
    this.studentData.emit({
      name: this.newName,
      rollno: this.newRollNo,
      department: this.newDepartment
    })
  }

  ngOnInit(): void {
    const todo = this.route.snapshot.routeConfig.path.substring(6)
    if(todo!='add') {
      this.edit = true
      const id = this.route.snapshot.params['id']
      this.profile = this.dataService.getData(id)
      this.newRollNo = id
      this.newName = this.profile.name
      this.newDepartment = this.profile.department
    }
  }

  editData(id: string){
    console.log(id)
    this.dataService.updateData(new profile(this.newName, id, this.newDepartment))
    this.profile = this.dataService.getData(id)
    console.log(this.profile)
    this.router.navigate(['/students', id])
  }

  addData(){
    this.dataService.addData(new profile(this.newName, this.newRollNo, this.newDepartment))
    this.router.navigate(['/students'])
  }

}
