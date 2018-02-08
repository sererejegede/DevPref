package com.springboot.devpref.dao;

import com.springboot.devpref.entity.Developer;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface DeveloperDAO extends CrudRepository<Developer, Integer>{

    //Just languages
    @Query(nativeQuery = true, value = "SELECT prog_name FROM languages")
    List<String> getColumn();

    Developer findByUsername(String username);

    @Query(nativeQuery = true, value = "SELECT username FROM developer WHERE username = ?1")
    String getUsernameOnly(String username);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "UPDATE developer SET first_lang = ?1, second_lang = ?2, third_lang = ?3 WHERE username = ?4")
    void addPreference(String first, String second, String third, String username);

}
