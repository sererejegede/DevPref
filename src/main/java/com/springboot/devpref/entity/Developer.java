package com.springboot.devpref.entity;

import com.springboot.devpref.Role;

import javax.persistence.*;

@Entity
@Table
public class Developer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dev_id")
    private Integer devId;

    @Column(name = "role", columnDefinition = "tinyint(4) default '0'")
    private byte role;

    @Column(name = "firstname", length = 30)
    private String firstname;

    @Column(name = "lastname", length = 30)
    private String lastname;

    @Column(name = "username", length = 30)
    private String username;

    @Column(name = "password", length = 30)
    private String password;

    @Column(name = "email", length = 30)
    private String email;

    @Column(name = "first_lang")
    private String firstLang;

    @Column(name = "second_lang")
    private String secondLang;

    @Column(name = "third_lang")
    private String thirdLang;


    //Getters and Setters

    public Integer getDevId() {
        return devId;
    }

    public void setDevId(Integer devId) {
        this.devId = devId;
    }

    public byte getRole() {
        return role;
    }

    public void setRole(byte role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstLang() {
        return firstLang;
    }

    public void setFirstLang(String firstLang) {
        this.firstLang = firstLang;
    }

    public String getSecondLang() {
        return secondLang;
    }

    public void setSecondLang(String secondLang) {
        this.secondLang = secondLang;
    }

    public String getThirdLang() {
        return thirdLang;
    }

    public void setThirdLang(String thirdLang) {
        this.thirdLang = thirdLang;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
