export class Contract {
  contractId: number;
  contractCode: string;
  startDate: string;
  endDate: string;
  contractDeposit: number;
  totalMoney: number;
  employee: string;
  customer: string;
  service: string;


  constructor(contractId: number, contractCode: string, startDate: string, endDate: string, contractDeposit: number, totalMoney: number, employee: string, customer: string, service: string) {
    this.contractId = contractId;
    this.contractCode = contractCode;
    this.startDate = startDate;
    this.endDate = endDate;
    this.contractDeposit = contractDeposit;
    this.totalMoney = totalMoney;
    this.employee = employee;
    this.customer = customer;
    this.service = service;
  }
}
