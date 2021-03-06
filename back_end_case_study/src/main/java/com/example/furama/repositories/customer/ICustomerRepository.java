package com.example.furama.repositories.customer;

import com.example.furama.models.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Page<Customer> findAllByCustomerNameContaining(Pageable pageable, String keyword);
    Customer findByCustomerCode(String code);
}
