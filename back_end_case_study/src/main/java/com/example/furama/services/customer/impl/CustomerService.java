package com.example.furama.services.customer.impl;

import com.example.furama.models.customer.Customer;
import com.example.furama.repositories.customer.ICustomerRepository;
import com.example.furama.services.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public Page<Customer> findAllPaing(Pageable pageable) {
        return iCustomerRepository.findAll(pageable);
    }

    @Override
    public void save(Customer customer) {
        this.iCustomerRepository.save(customer);
    }

    @Override
    public void remove(Integer idDelete) {
        this.iCustomerRepository.deleteById(idDelete);
    }

    @Override
    public Customer findById(Integer id) {
        return iCustomerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Customer> findAll() {
        return iCustomerRepository.findAll();
    }

    @Override
    public Customer findByCustomerCode(String customerCurrentCode) {
        return iCustomerRepository.findByCustomerCode(customerCurrentCode);
    }
}
