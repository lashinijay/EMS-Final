package com.example.EMS.Repository;

import com.example.EMS.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface EmployeeRepository extends CrudRepository<Employee , Long>{

    @Query("SELECT t FROM Employee t WHERE t.employee_name=:search_name")
    Employee findByName(String search_name);

}

