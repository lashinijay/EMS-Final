import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { DeleteEmployeeComponent } from './employee/delete-employee.component';
import { ModifyEmployeeComponent } from './employee/modify-employee.component';

const appRoutes: Routes=[
  {path:'list', component:ListEmployeesComponent},
  {path:'create', component:CreateEmployeeComponent},
  {path:'delete', component:DeleteEmployeeComponent},
  {path:'modify', component:ModifyEmployeeComponent},
  {path:'', redirectTo:'/list' ,pathMatch:'full'}
]

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
