package com.example.dto;

import com.example.models.DanhMuc;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class BdsDto implements Validator {
    private Integer id;
    private String banLa;
    private String banDangTin;
    private String tinhTrang;
    @NotBlank
    private String diaChi;
    @NotBlank
    @Pattern(regexp = "^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$", message = "Must be a number")
    private String dienTich;
    @NotBlank
    private String tuaDe;
    @NotBlank
    private String noiDung;
    @NotBlank
    @Pattern(regexp = "^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$", message = "Must be a number")
    private String gia;
    private String hinhAnh;
    private String trangThai;
    private String ngayDang;
    private String huong;
    private String vungMien;
    private DanhMuc danhMuc;

    public BdsDto() {
    }

    public BdsDto(Integer id, String banLa, String banDangTin, String tinhTrang, String diaChi, String dienTich, String tuaDe, String noiDung, String gia, String hinhAnh, String trangThai, String ngayDang, String huong, String vungMien, DanhMuc danhMuc) {
        this.id = id;
        this.banLa = banLa;
        this.banDangTin = banDangTin;
        this.tinhTrang = tinhTrang;
        this.diaChi = diaChi;
        this.dienTich = dienTich;
        this.tuaDe = tuaDe;
        this.noiDung = noiDung;
        this.gia = gia;
        this.hinhAnh = hinhAnh;
        this.trangThai = trangThai;
        this.ngayDang = ngayDang;
        this.huong = huong;
        this.vungMien = vungMien;
        this.danhMuc = danhMuc;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBanLa() {
        return banLa;
    }

    public void setBanLa(String banLa) {
        this.banLa = banLa;
    }

    public String getBanDangTin() {
        return banDangTin;
    }

    public void setBanDangTin(String banDangTin) {
        this.banDangTin = banDangTin;
    }

    public String getTinhTrang() {
        return tinhTrang;
    }

    public void setTinhTrang(String tinhTrang) {
        this.tinhTrang = tinhTrang;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getDienTich() {
        return dienTich;
    }

    public void setDienTich(String dienTich) {
        this.dienTich = dienTich;
    }

    public String getTuaDe() {
        return tuaDe;
    }

    public void setTuaDe(String tuaDe) {
        this.tuaDe = tuaDe;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getHinhAnh() {
        return hinhAnh;
    }

    public void setHinhAnh(String hinhAnh) {
        this.hinhAnh = hinhAnh;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public String getNgayDang() {
        return ngayDang;
    }

    public void setNgayDang(String ngayDang) {
        this.ngayDang = ngayDang;
    }

    public String getHuong() {
        return huong;
    }

    public void setHuong(String huong) {
        this.huong = huong;
    }

    public String getVungMien() {
        return vungMien;
    }

    public void setVungMien(String vungMien) {
        this.vungMien = vungMien;
    }

    public DanhMuc getDanhMuc() {
        return danhMuc;
    }

    public void setDanhMuc(DanhMuc danhMuc) {
        this.danhMuc = danhMuc;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        final String REGEX_INT = "^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$";
        BdsDto bdsDto = (BdsDto) target;
        if (dienTich.matches(REGEX_INT)) {
            int intDienTich = Integer.parseInt(dienTich);
            if (intDienTich < 20) {
                errors.rejectValue("dienTich","", "Diện tích phải lớn hơn 20m2");
            }
        }

        if (gia.matches(REGEX_INT)) {
            int intGia = Integer.parseInt(gia);
            if (intGia <= 100000000) {
                errors.rejectValue("gia", "", "Giá phải lớn hơn 100 triệu");
            }
        }
    }
}
