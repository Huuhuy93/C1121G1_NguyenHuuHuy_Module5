package com.example.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class DanhMuc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_danh_muc")
    private Integer id;
    private String name;

    @JsonBackReference
    @OneToMany(mappedBy = "danhMuc")
    private Set<Bds> bdss ;

    public DanhMuc() {
    }

    public DanhMuc(Integer id, String name, Set<Bds> bdss) {
        this.id = id;
        this.name = name;
        this.bdss = bdss;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Bds> getBdss() {
        return bdss;
    }

    public void setBdss(Set<Bds> bdss) {
        this.bdss = bdss;
    }
}
