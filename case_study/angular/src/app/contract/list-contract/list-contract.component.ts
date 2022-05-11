import { Component, OnInit } from '@angular/core';
import {Contract} from "../contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts : Array<Contract> = [];

  constructor() {
    this.contracts.push(new Contract(1, "HD-001", "05-05-2021", "08-05-2021", 1000000, 10000000, "Nguyễn Văn An", "Nguyễn Thị Hào", "Room Twin 01"));
    this.contracts.push(new Contract(2, "HD-002", "03-07-2021", "08-07-2021", 3000000, 15000000, "Nguyễn Hữu Hà", "Trương Đình Nghệ", "Villa Beach Front"));
  }

  ngOnInit(): void {
  }

}
