package com.example.services;

import com.example.models.Bds;
import com.example.models.DanhMuc;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBdsService {

    Page<Bds> findAllPaing(Pageable pageable);

    void save(Bds bds);

    void remove(Integer idDelete);

    Bds findById(Integer id);

    List<Bds> findAll();

    List<DanhMuc> findAllDanhMuc();

    Page<Bds> findAllByDienTichContainingAndGiaContainingAndHuongContaining(String dienTich, String gia, String huong, Pageable pageable);
}
