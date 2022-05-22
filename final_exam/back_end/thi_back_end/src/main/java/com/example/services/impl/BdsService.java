package com.example.services.impl;

import com.example.models.Bds;
import com.example.models.DanhMuc;
import com.example.repository.IBdsRepository;
import com.example.repository.IDanhMucRepository;
import com.example.services.IBdsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BdsService implements IBdsService {

    @Autowired
    private IBdsRepository iBdsRepository;

    @Autowired
    private IDanhMucRepository iDanhMucRepository;

    @Override
    public Page<Bds> findAllPaing(Pageable pageable) {
        return iBdsRepository.findAll(pageable);
    }

    @Override
    public void save(Bds bds) {
        this.iBdsRepository.save(bds);
    }

    @Override
    public void remove(Integer idDelete) {
        this.iBdsRepository.deleteById(idDelete);
    }

    @Override
    public Bds findById(Integer id) {
        return iBdsRepository.findById(id).orElse(null);
    }

    @Override
    public List<Bds> findAll() {
        return iBdsRepository.findAll();
    }

    @Override
    public List<DanhMuc> findAllDanhMuc() {
        return iDanhMucRepository.findAll();
    }

    @Override
    public Page<Bds> findAllByDienTichContainingAndGiaContainingAndHuongContaining(String dienTich, String gia, String huong, Pageable pageable) {
        return iBdsRepository.findAllByDienTichContainingAndGiaContainingAndHuongContaining(dienTich, gia, huong, pageable);
    }


}
