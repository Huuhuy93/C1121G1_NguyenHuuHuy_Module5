package com.example.controller;

import com.example.dto.BdsDto;
import com.example.models.Bds;
import com.example.models.DanhMuc;
import com.example.services.IBdsService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class BdsRestfulController {
    @Autowired
    private IBdsService iBdsService;

    @GetMapping(value = {"/list"})
    public ResponseEntity<Page<Bds>> showList(@RequestParam(required = false, defaultValue = "") String gia,
                                              @RequestParam(required = false, defaultValue = "") String dienTich,
                                              @RequestParam(required = false, defaultValue = "") String huong,
//                                              @RequestParam(required = false) String sortSelect,
                                              Pageable pageable) {
//        Sort sort = Sort.by("ngayDang").descending();
//        if (sortSelect.equals("DESC")) {
//            sort = Sort.by("gia").descending();
//        } else if (sortSelect.equals("ASC")) {
//            sort = Sort.by("gia").ascending();
//        }

        Page<Bds> bdsPage = iBdsService.findAllByDienTichContainingAndGiaContainingAndHuongContaining(dienTich, gia, huong, PageRequest.of(pageable.getPageNumber(), 3));
        return new ResponseEntity<>(bdsPage, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<DanhMuc>> listDanhMuc() {
        List<DanhMuc> danhMucList = this.iBdsService.findAllDanhMuc();
        return new ResponseEntity<>(danhMucList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Bds> findById(@PathVariable Integer id) {
        Bds bds = this.iBdsService.findById(id);
        if (bds == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(bds, HttpStatus.OK);
    }

    @PostMapping("/list")
    public ResponseEntity<Map<String, String>> createBaiDang(@Valid @RequestBody BdsDto bdsDto, BindingResult bindingResult) {
        Map<String, String> errors = null;

        bdsDto.validate(bdsDto, bindingResult);

        if (bindingResult.hasFieldErrors()) {
            errors = bindingResult.getFieldErrors().stream().collect(Collectors.toMap(e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        Bds bds = new Bds();
        DanhMuc danhMuc = new DanhMuc();

        BeanUtils.copyProperties(bdsDto.getDanhMuc(), danhMuc);
        BeanUtils.copyProperties(bdsDto, bds);
        bds.setDanhMuc(danhMuc);

        this.iBdsService.save(bds);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/list/{id}")
    public ResponseEntity<Void> deleteBds(@PathVariable Integer id) {
        if (this.iBdsService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.iBdsService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping(value = { "/list"})
//    public ResponseEntity<Page<Bds>> showList(@PageableDefault(value = 3) Pageable pageable) {
//        Page<Bds> bdsPage = iBdsService.findAllPaing(pageable);
//        return new ResponseEntity<>(bdsPage, HttpStatus.OK);
//    }


}
