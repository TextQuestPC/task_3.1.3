package ru.kata.spring.boot_security.demo.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username")
    private String username;
    @Column(name = "age")
    private int age;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles = new ArrayList<>();

    public User() {
    }

    public User(String username, int age, String email, String password, List<Role> roles) {
        this.username = username;
        this.age = age;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String name) {
        this.username = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public List<String> getNameRoles() {
        List<String> rolesNames = new ArrayList<>();
        for (Role role : roles) {
            rolesNames.add(role.getNameForView());
        }
        return rolesNames;

//        StringBuilder sb = new StringBuilder();
//        for (Role role : roles) {
//            sb.append(role.getNameForView()).append(" ");
//        }
//        return sb.toString();
    }

    public void setRole(List<Role> role) {
        this.roles = role;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + username + ", age=" + age + ", email=" + email + ", roles=" + roles + "]";
    }
}
