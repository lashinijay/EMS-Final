import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators, RequiredValidator} from '@angular/forms';
import {Employee } from './Employee';
import { EmployeeDetailsService } from '../employee-details.service';
import { d } from '@angular/core/src/render3';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
   message :any;
   skills :any;
  employee : Employee;
  definedSkills :any;

  constructor(private service: EmployeeDetailsService,private fb:FormBuilder) {
    this.definedSkills =['Java','C++','Xamarin','.NET','C#']

    this.employeeForm =this.fb.group({
      name :['',Validators.required],
      email:['',Validators.required],
      dateOfBirth:['',Validators.required],
      skills: ['']

    })

      this.employee = new Employee()
  }

  ngOnInit() {}

  onSubmit() : void {}

  public save() {

    if (this.employeeForm.get('name').errors || this.employeeForm.get('email').errors ||this.employeeForm.get('dateOfBirth').errors){
      console.log("please fill the all required fields");
      this.message = "please fill the all required fields"
      return}

    let x:any
    this.employee.employee_name = this.employeeForm.value.name;
    this.employee.employee_dob = this.employeeForm.value.dateOfBirth;
    this.employee.employee_email = this.employeeForm.value.email;
    this.employee.employee_skills = this.employeeForm.value.skills;

    console.log(this.employee.employee_skills);
    this.skills = this.employee.employee_skills.split(',');
    console.log(this.skills);
    for (let i=0; i<this.skills.length; i++){
      console.log(this.skills[i]);
      let var1= this.definedSkills.includes(this.skills[i]);
      console.log(var1);
      if (!var1){
        console.log("Enter skills from the list given");
        this.message= "Enter skills from the list given";
        alert(this.message)
        return
       }
    }

    this.message = "Successfully Created"
    this.service.createEmployee(this.employee).subscribe((data)=>{x=data;
      console.log(x)});

      alert(this.message);
  }
}





