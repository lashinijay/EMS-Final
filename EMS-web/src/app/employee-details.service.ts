import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listEmployees(){
    return this.http.get('http://localhost:8080/viewlist');
  }

  public createEmployee(employee){
    return this.http.post("http://localhost:8080/create",employee,{responseType:'text' as 'json'});
  }

  deleteEmployee(search_name){
    return this.http.delete("http://localhost:8080/delete/"+search_name)
  }

  searchEmployee(search_name){
    return this.http.get("http://localhost:8080/search/"+search_name)
  }

  modifyEmployee(search_name,employee){
    return this.http.put("http://localhost:8080/update/"+search_name,employee)
  }


}
