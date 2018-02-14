package com.springboot.devpref.service;

import com.springboot.devpref.Role;
import com.springboot.devpref.dao.CountDAO;
import com.springboot.devpref.dao.DeveloperDAO;
import com.springboot.devpref.entity.Choice;
import com.springboot.devpref.entity.Developer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeveloperService {
    @Autowired
    private DeveloperDAO developerDAO;
    @Autowired
    private CountDAO countDAO;

    //return languages list
    public List<String> getColumn() {
        return developerDAO.getColumn();
    }

    //Creating new user
    public void addNew(Developer developer) {
        developerDAO.save(developer);
    }

    public Developer getUser(String username) {
        return developerDAO.findByUsername(username);
    }

    public String getUsernameOnly(String username) {
        return developerDAO.getUsernameOnly(username);
    }

    //Adding the languages to the db
    public void addPreference(String first, String second, String third, String username) {
        developerDAO.addPreference(first, second, third, username);
    }

    public void addLanguage(Choice choice) {
        countDAO.save(choice);
    }

    public void setRole(byte role, String serere) {
        developerDAO.setRole(role, serere);
    }
}
