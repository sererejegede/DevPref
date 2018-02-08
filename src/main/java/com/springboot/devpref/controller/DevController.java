package com.springboot.devpref.controller;

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
        model.setViewName("index");
        return model;
    }

    @GetMapping(value = "/test")
    public ModelAndView formView(ModelAndView model){
        model.addObject("languages", getColumn());
        model.setViewName("index");
        return model;
    }

    @GetMapping(value = "/view")
    public List<String> getColumn(){
        return developerService.getColumn();
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

        if (Objects.equals(password, developerService.getUser(username).getPassword())){
            newList.addAll(countService.orderedLanguages());
            newList.addAll(countService.orderedFirstLangCount());
            newList.addAll(countService.orderedSecondLangCount());
            newList.addAll(countService.orderedThirdLangCount());
        }

        if (!"".equals(first) && first != null){
            developerService.addPreference(first, second, third, username);
        }
        return newList;
    }

    //To temporarily show registration page
    @GetMapping(value = "/make")
    public ModelAndView m(ModelAndView mo){
        mo.setViewName("view");
        return mo;
    }


    //Registration
    @PostMapping(value = "/register")
    public void addNew(Developer developer, @RequestParam Map<String, String> reqMap){
        String username = reqMap.get("username");
        String first = reqMap.get("first");
        String second = reqMap.get("second");
        String third = reqMap.get("third");

        developerService.addNew(developer);
        developerService.addPreference(first, second, third, username);
    }

    @GetMapping(value = "order")
    public List<String> orderedList(){
        List<String> newList = new ArrayList<>();

        return newList;
    }

//    @GetMapping(value = "/count")
//    public List<Integer> returnCount(){
//        return countService.returnCount();
//    }

}
