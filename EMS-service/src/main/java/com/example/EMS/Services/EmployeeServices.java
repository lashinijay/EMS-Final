package com.example.EMS.Services;

import com.example.EMS.Model.Employee;
import com.example.EMS.Repository.EmployeeRepository;
import org.aspectj.weaver.ast.Var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service

public class EmployeeServices implements EmployeeServicesInt{


    @Autowired
    EmployeeRepository empRepository;

    @Override
    public void create(Employee employee) {
        Employee newEmp = new Employee();

        newEmp.setEmployee_name(employee.getEmployee_name());
        newEmp.setEmployee_email(employee.getEmployee_email());
        newEmp.setEmployee_dob(employee.getEmployee_dob());
        newEmp.setEmployee_skills(employee.getEmployee_skills());
        empRepository.save(newEmp);

    }

    public Employee findByName(String search_name) {
        return empRepository.findByName(search_name);
    }


    public List<Employee> findAll(){
        List<Employee> list = new ArrayList<>();
        empRepository.findAll().forEach(e -> list.add(e));
        return list;
    }


    public void deleteByName(Employee emp){
        empRepository.delete(emp);
    }

    public void update(String search_name, Employee employee) {
        Employee emp = findByName(search_name);
        emp.setEmployee_name(employee.getEmployee_name());
        emp.setEmployee_email(employee.getEmployee_email());
        emp.setEmployee_dob(employee.getEmployee_dob());
        emp.setEmployee_skills(employee.getEmployee_skills());
        empRepository.save(emp);

    }





}
