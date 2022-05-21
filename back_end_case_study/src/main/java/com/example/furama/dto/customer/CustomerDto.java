package com.example.furama.dto.customer;

import com.example.furama.models.customer.CustomerType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class CustomerDto implements Validator {
    private Integer customerId;

    @NotBlank(message = "customer code cannot blank !")
    @Pattern(regexp = "^KH-[\\d]{4}", message = "The code customer incorrect format !")
    private String customerCode;

    @NotBlank
    @Pattern(regexp = "^[^\\d]+$", message = "The name customer cannot contain number characters !")
    private String customerName;

    @NotBlank(message = "customer birthday cannot blank !")
    private String customerBirthday;

    @NotNull(message = "customer gender cannot blank !")
    private Integer customerGender;

    @NotBlank(message = "customer id card cannot blank !")
    @Pattern(regexp = "^\\d{9}|\\d{11}$", message = "9 - 10 number please")
    private String customerIdCard;

    @NotBlank(message = "customer phone cannot blank !")
    @Pattern(regexp = "^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$",
//            @Pattern(regexp = "^((090)|(091)|(\\+8490)|(\\+8491))\\d{7}$", message = "invalid phone number ex:0901234567")
            message = "The phone number incorect format !")
    private String customerPhone;

    @Email(message = "Incorrect email format !")
    @NotBlank
    private String customerEmail;

    @NotBlank(message = "customer address cannot blank !")
    private String customerAddress;

    private CustomerType customerType;

    public CustomerDto() {
    }

    public Integer getCustomerId() {
        return customerId;
    }
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerBirthday() {
        return customerBirthday;
    }

    public void setCustomerBirthday(String customerBirthday) {
        this.customerBirthday = customerBirthday;
    }

    public Integer getCustomerGender() {
        return customerGender;
    }

    public void setCustomerGender(Integer customerGender) {
        this.customerGender = customerGender;
    }

    public String getCustomerIdCard() {
        return customerIdCard;
    }

    public void setCustomerIdCard(String customerIdCard) {
        this.customerIdCard = customerIdCard;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
