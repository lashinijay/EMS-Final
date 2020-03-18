package com.example.EMS.Model;
import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name="skills")

public class Skills {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @Column(name = "name")
    private String name;

//    @ManyToMany(mappedBy = "skills")
    @ManyToMany
     private Set<Employee> employee;

    public Skills(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Skills() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

