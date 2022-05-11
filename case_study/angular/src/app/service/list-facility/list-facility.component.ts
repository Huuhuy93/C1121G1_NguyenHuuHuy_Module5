import { Component, OnInit } from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  services: Array<Service> = [];

  constructor() {
    this.services.push(new Service(1, "DV-001", "Villa Beach Front", 25000, 10000000, 10, "vip", "có hồ bơi", 500, 4));
    this.services.push(new Service(2, "DV-002", "House Princess 01", 14000, 5000000, 7, "vip", "Có thêm bếp nướng", null, 3));
  }

  ngOnInit(): void {
  }

}
