package com.example.furama.services.customer.impl;

import com.example.furama.models.customer.CustomerType;
import com.example.furama.repositories.customer.ICustomerTypeRepository;
import com.example.furama.services.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService {
    @Autowired
    private ICustomerTypeRepository iCustomerTypeRepository;

    @Override
    public List<CustomerType> findAll() {
        return iCustomerTypeRepository.findAll();
    }
}
