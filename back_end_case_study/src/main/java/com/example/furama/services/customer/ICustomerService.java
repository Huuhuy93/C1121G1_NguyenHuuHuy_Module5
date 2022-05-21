package com.example.furama.services.customer;

import com.example.furama.models.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    Page<Customer> findAllPaing(Pageable pageable);

    void save(Customer customer);


    void remove(Integer idDelete);

    Customer findById(Integer id);


    List<Customer> findAll();

    Customer findByCustomerCode(String customerCurrentCode);
}
