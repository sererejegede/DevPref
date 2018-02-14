package com.springboot.devpref.controller;

import com.springboot.devpref.Role;
import com.springboot.devpref.entity.Choice;
import com.springboot.devpref.entity.Developer;
import com.springboot.devpref.service.CountService;
import com.springboot.devpref.service.DeveloperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
public class DevController {
    @Autowired
    private DeveloperService developerService;
    @Autowired
    private CountService countService;

    @RequestMapping(value = "/")
    public ModelAndView home(ModelAndView model){
        model.addObject("languages", getColumn());
        model.setViewName("index");
        return model;
    }

    @GetMapping(value = "/view")
    public List<String> getColumn(){
        return developerService.getColumn();
    }

    //Admin Section
    @PostMapping(value = "addLanguage")
    public String addLanguage(Choice choice, @RequestParam Map<String, String> rp) {

        String username = rp.get("username");
        String progName = rp.get("progName");
        String success = "There was an error";
        if (developerService.getUser(username).getRole() ==0){
            success = "Admin Privilege Required";
        }
        else if (developerService.getUser(username).getRole() == 1) {

            if (choice.getFirstLang() == null) {
                choice.setFirstLang(0);
            }
            if (choice.getSecondLang() == null) {
                choice.setSecondLang(0);
            }
            if (choice.getThirdLang() == null) {
                choice.setThirdLang(0);
            }
            if (!"".equals(progName) && progName != null) {
                developerService.addLanguage(choice);
                success = "Success";
            }
        }
        return success;
    }

    //Login things
    @PostMapping(value = "/customLogin")
    public List<String> getUser(@RequestParam Map<String, String> reqMap){
        String username = reqMap.get("username");
        String password = reqMap.get("password");
        String first = reqMap.get("first");
        String second = reqMap.get("second");
        String third = reqMap.get("third");
        List<String> newList = new ArrayList<>();

        if (!"".equals(first) && first != null){
            developerService.addPreference(first, second, third, username);
            countService.returnCount();
        }

        if (Objects.equals(password, developerService.getUser(username).getPassword())){
            newList = countService.finalAnswer();
        }

        return newList;
    }

    //Registration
    @PostMapping(value = "/register")
    public List<String> addNew(Developer developer, @RequestParam Map<String, String> reqMap){
        String username = reqMap.get("username");
        String first = reqMap.get("firstLang");
        String second = reqMap.get("secondLang");
        String third = reqMap.get("thirdLang");

        List<String> newList = new ArrayList<>();

        if (!Objects.equals(username, developerService.getUsernameOnly(username))){
            developerService.addNew(developer);
            if (!"".equals(first) && first != null){
                developerService.addPreference(first, second, third, username);
                countService.returnCount();
            }
            newList = countService.finalAnswer();
        }
        return newList;
    }

    @PostMapping(value = "order")
    public String orderedList(Developer developer, @RequestParam Map<String, String> reqMap){
        String username = reqMap.get("username");
        String u2 = developerService.getUsernameOnly(username);
        if (!Objects.equals(username, u2)) {
            developerService.addNew(developer);
        }
        return u2;
    }

    //To temporarily show registration page
    @GetMapping(value = "/make")
    public ModelAndView m(ModelAndView mo){
        mo.setViewName("view");
        return mo;
    }

    @GetMapping(value = "/enum/{username}")
    public byte mo(@PathVariable("username") String serere){
        byte role = 1;
        developerService.setRole(role, serere);
        return developerService.getUser(serere).getRole();
    }

}
