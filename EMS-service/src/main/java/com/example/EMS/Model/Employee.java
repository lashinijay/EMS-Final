package com.example.EMS.Model;
import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="employee")

public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "employee_name")
    private String employee_name;

    @Column(name = "employee_email")
    private String employee_email;

    @Column(name = "employee_dob")
    private String employee_dob;
    private String employee_skills;

    public Employee() {
    }

    public Employee(String name, String email, String dob, String skills) {
        this.employee_name = name;
        this.employee_email = email;
        this.employee_dob = dob;
        this.employee_skills = skills;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmployee_name() {
        return employee_name;
    }

    public void setEmployee_name(String employee_name) {
        this.employee_name = employee_name;
    }

    public String getEmployee_email() {
        return employee_email;
    }

    public void setEmployee_email(String employee_email) {
        this.employee_email = employee_email;
    }

    public String getEmployee_dob() {
        return employee_dob;
    }

    public void setEmployee_dob(String employee_dob) {
        this.employee_dob = employee_dob;
    }

    public String getEmployee_skills() {
        return employee_skills;
    }

    public void setEmployee_skills(String employee_skills) {
        this.employee_skills = employee_skills;
    }
}
