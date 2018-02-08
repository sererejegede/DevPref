package com.springboot.devpref.dao;

import com.springboot.devpref.entity.Choice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CountDAO extends JpaRepository<Choice, Integer> {



    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM developer WHERE first_lang = ?1")
    Integer returnCountFirstLang(String lang);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM developer WHERE second_lang = ?1")
    Integer returnCountSecondLang(String lang);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM developer WHERE third_lang = ?1")
    Integer returnCountThirdLang(String lang);

    @Query(nativeQuery = true, value = "SELECT COUNT(languages.first_lang) FROM languages")
    List<Integer> count1();

    @Query(nativeQuery = true, value = "SELECT COUNT(languages.second_lang) FROM languages")
    List<Integer> count2();

    @Query(nativeQuery = true, value = "SELECT COUNT(languages.third_lang) FROM languages")
    List<Integer> count3();

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "UPDATE languages SET first_lang = ?1 WHERE prog_name = ?2")
    void updateCountFirst(Integer num, String one);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "UPDATE languages SET second_lang = ?1 WHERE prog_name = ?2")
    void updateCountSecond(Integer num, String one);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "UPDATE languages SET third_lang = ?1 WHERE prog_name = ?2")
    void updateCountThird(Integer num, String one);

    //List of ordered languages
    @Query(nativeQuery = true, value = "SELECT prog_name FROM languages ORDER BY first_lang DESC, second_lang DESC, third_lang DESC")
    List<String> orderedLanguages();

    //List of ordered firstlang count
    @Query(nativeQuery = true, value = "SELECT first_lang FROM languages ORDER BY first_lang DESC, second_lang DESC, third_lang DESC")
    List<Integer> orderedFirstLangCount();

    //List of ordered secondlang count
    @Query(nativeQuery = true, value = "SELECT second_lang FROM languages ORDER BY first_lang DESC, second_lang DESC, third_lang DESC")
    List<Integer> orderedSecondLangCount();

    //List of ordered thirdlang count
    @Query(nativeQuery = true, value = "SELECT third_lang FROM languages ORDER BY first_lang DESC, second_lang DESC, third_lang DESC")
    List<Integer> orderedThirdLangCount();
}
