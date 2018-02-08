package com.springboot.devpref.service;

import com.springboot.devpref.Constants;
import com.springboot.devpref.dao.CountDAO;
import com.springboot.devpref.dao.DeveloperDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CountService {
    @Autowired
    private CountDAO countDAO;
    @Autowired
    private DeveloperDAO developerDAO;

    public void returnCount() {
        for (String language: developerDAO.getColumn()) {
            countDAO.updateCountFirst(countDAO.returnCountFirstLang(language),language);
        }
        for (String language: developerDAO.getColumn()) {
            countDAO.updateCountSecond(countDAO.returnCountSecondLang(language),language);
        }
        for (String language: developerDAO.getColumn()) {
            countDAO.updateCountThird(countDAO.returnCountThirdLang(language),language);
        }
    }

    public List<String> orderedLanguages() {
        return countDAO.orderedLanguages();
    }

    public List<String> orderedFirstLangCount() {
       return integerToString(countDAO.orderedFirstLangCount());
    }

    public List<String> orderedSecondLangCount(){
        return integerToString(countDAO.orderedSecondLangCount());
    }

    public List<String> orderedThirdLangCount(){
        return integerToString(countDAO.orderedThirdLangCount());
    }

    private List<String> integerToString(List<Integer> integer){
        List<String> newList = new ArrayList<>();
        for (Integer coming : integer) {
           newList.add(String.valueOf(coming));
        }
        return newList;
    }

    public List<String> finalAnswer(){
        List<String> finalAnswer = new ArrayList<>();
        finalAnswer.addAll(orderedLanguages());
        finalAnswer.addAll(orderedFirstLangCount());
        finalAnswer.addAll(orderedSecondLangCount());
        finalAnswer.addAll(orderedThirdLangCount());
        return finalAnswer;
    }
}
