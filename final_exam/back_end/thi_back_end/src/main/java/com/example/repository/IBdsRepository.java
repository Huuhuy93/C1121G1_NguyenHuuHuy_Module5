package com.example.repository;

import com.example.models.Bds;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IBdsRepository extends JpaRepository<Bds, Integer> {
//    @Query(value = "select * from bds where gia like concat('%',:gia,'%') and " +
//            "dien_tich like concat('%',:dienTich,'%') and huong like concat('%',:huong,'%') ", nativeQuery = true)
//    Page<Bds> findAllByGiaAndDienTichAndHuongContaining(@Param("gia") String gia, @Param("dienTich") String dienTich,
//                                                          @Param("huong") String huong, Pageable pageable);

    Page<Bds> findAllByDienTichContainingAndGiaContainingAndHuongContaining(String dienTich, String gia, String huong, Pageable pageable);
}
