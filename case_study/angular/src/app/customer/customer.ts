export class Customer {
  id: number;
  customerCode: string;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: number;


  constructor(id: number, customerCode: string, customerName: string, customerBirthday: string, customerGender: number, customerIdCard: string, customerPhone: string, customerEmail: string, customerAddress: string, customerType: number) {
    this.id = id
    this.customerCode = customerCode;
    this.customerName = customerName;
    this.customerBirthday = customerBirthday;
    this.customerGender = customerGender;
    this.customerIdCard = customerIdCard;
    this.customerPhone = customerPhone;
    this.customerEmail = customerEmail;
    this.customerAddress = customerAddress;
    this.customerType = customerType;
  }
}
