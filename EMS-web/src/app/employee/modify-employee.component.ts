import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {Employee } from './Employee';
import { EmployeeDetailsService } from '../employee-details.service';


@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {
  employeeModifyForm: FormGroup;
  employee : Employee;
  message : any;

  constructor(private service: EmployeeDetailsService, private fb:FormBuilder) {

   this.employeeModifyForm =this.fb.group({
    searchName :[''],
    name :[''],
    email:[''],
    dateOfBirth:[''],
    skills:['']

  })
      this.employee = new Employee();

  }

  ngOnInit() {}

  onSearchClick(searchName): void{
    let emp:any
      console.log(this.employeeModifyForm.value.searchName);
      this.service.searchEmployee(this.employeeModifyForm.value.searchName).subscribe((data)=>{emp=data;
      console.log(emp);
      this.employeeModifyForm.patchValue({
        name:emp.employee_name,
        email:emp.employee_email,
        dateOfBirth:emp.employee_dob,
        skills:emp.employee_skills
        })
    });

}

  onSubmit() : void{}

  onModifyClick() : void{
    let x:any
    this.employee.employee_name = this.employeeModifyForm.value.name;
    this.employee.employee_dob = this.employeeModifyForm.value.dateOfBirth;
    this.employee.employee_email = this.employeeModifyForm.value.email;
    this.employee.employee_skills = this.employeeModifyForm.value.skills;
     this.service.modifyEmployee(this.employeeModifyForm.value.searchName, this.employee).subscribe((data)=>{x=data;
    console.log(x)});
    alert("Successfully Updated");
  }



  }



