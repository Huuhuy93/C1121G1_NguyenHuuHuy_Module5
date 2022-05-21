package com.example.furama.services.customer;

import com.example.furama.models.customer.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> findAll();
}
