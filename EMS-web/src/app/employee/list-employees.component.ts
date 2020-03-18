import { Component, OnInit } from '@angular/core';
import {Employee } from './Employee';
import { EmployeeDetailsService } from '../employee-details.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employee : Employee;
  emp:any
  constructor(private service: EmployeeDetailsService) {}

  ngOnInit() {
    this.employee = new Employee()
    this.service.listEmployees().subscribe((data)=>{this.emp=data;
  });
  }
}

