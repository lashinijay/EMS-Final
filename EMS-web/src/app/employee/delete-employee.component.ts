import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {Employee } from './Employee';
import { EmployeeDetailsService } from '../employee-details.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employeeDeleteForm: FormGroup;
  employee : Employee;

  constructor(private service: EmployeeDetailsService,private fb:FormBuilder) { 

    this.employeeDeleteForm =this.fb.group({
      searchName :['', Validators.required],
      name :['', Validators.required],
      email:['',Validators.required],
      dateOfBirth:['',Validators.required],
      skills:['']});


      this.employee = new Employee();
  }

  ngOnInit() {} 

  onSearchClick(searchName){
          
    let emp:any
    this.service.searchEmployee(this.employeeDeleteForm.value.searchName).subscribe((data)=>{emp=data;
    this.employeeDeleteForm.patchValue({
        name:emp.employee_name,
        email:emp.employee_email,
        dateOfBirth:emp.employee_dob,
        skills:emp.employee_skills
        }) 
    });
  }

  onDeleteClick(searchName){
    let emp:any
    this.service.deleteEmployee(this.employeeDeleteForm.value.searchName).subscribe((data)=>{emp=data;
      alert("Successfully Deleted");
  });

}

}
