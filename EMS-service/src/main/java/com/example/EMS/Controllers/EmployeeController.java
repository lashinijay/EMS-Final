package com.example.EMS.Controllers;

import com.example.EMS.Model.Employee;
import com.example.EMS.Repository.EmployeeRepository;
import com.example.EMS.Services.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class EmployeeController {

    @Autowired
    EmployeeServices empServices;
    private EmployeeRepository empRepository;

    @PostMapping("/create")
    public void create(@RequestBody Employee employee) {
        empServices.create(employee);
    }

    @GetMapping("/viewlist")
    public List<Employee> viewlist(){
        return empServices.findAll();
    }

    @GetMapping("/search/{search_name}")
    public Employee findByName(@PathVariable("search_name") String search_name){
        return empServices.findByName(search_name);
    }

    @DeleteMapping("/delete/{search_name}")
    public void deleteByName(@PathVariable("search_name") String search_name){
        Employee emp = empServices.findByName(search_name);
        empServices.deleteByName(emp);
    }

    @PutMapping("/update/{search_name}")
    public void update(@PathVariable("search_name") String search_name, @RequestBody Employee employee){
        empServices.update(search_name , employee);
    }


}
