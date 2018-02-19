package com.springboot.devpref.entity;

import javax.persistence.*;

@Entity
@Table(name = "languages")
public class Choice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dev_id")
    private Integer devId;

    @Column(name = "prog_name", length = 30)
    private String progName;

    @Column(name = "first_lang")
    private Integer firstLang = 0;

    @Column(name = "second_lang")
    private Integer secondLang = 0;

    @Column(name = "third_lang")
    private Integer thirdLang = 0;

   public String getProgName() {
        return progName;
    }

    public void setProgName(String progName) {
        this.progName = progName;
    }

    public Integer getFirstLang() {
        return firstLang;
    }

    public void setFirstLang(Integer firstLang) {
        this.firstLang = firstLang;
    }

    public Integer getSecondLang() {
        return secondLang;
    }

    public void setSecondLang(Integer secondLang) {
        this.secondLang = secondLang;
    }

    public Integer getThirdLang() {
        return thirdLang;
    }

    public void setThirdLang(Integer thirdLang) {
        this.thirdLang = thirdLang;
    }
}
