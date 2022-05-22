package com.example.models;

import javax.persistence.*;

@Entity
public class Bds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_bds")
    private Integer id;
    private String banLa;
    private String banDangTin;
    private String tinhTrang;
    private String diaChi;
    private String dienTich;
    private String tuaDe;
    private String noiDung;
    private String gia;
    private String hinhAnh;
    private String trangThai;
    private String ngayDang;
    private String huong;
    private String vungMien;

    @ManyToOne
    @JoinColumn(name = "id_danh_muc", referencedColumnName = "id_danh_muc")
    private DanhMuc danhMuc;

    public Bds() {
    }

    public Bds(Integer id, String banLa, String banDangTin, String tinhTrang, String diaChi, String dienTich, String tuaDe, String noiDung, String gia, String hinhAnh, String trangThai, String ngayDang, String huong, String vungMien, DanhMuc danhMuc) {
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
}
