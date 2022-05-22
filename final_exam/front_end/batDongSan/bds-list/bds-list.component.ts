import { Component, OnInit } from '@angular/core';
import {Bds} from "../../model/bds";
import {BdsService} from "../../services/bds.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-bds-list',
  templateUrl: './bds-list.component.html',
  styleUrls: ['./bds-list.component.css']
})
export class BdsListComponent implements OnInit {
  batDongSans: Bds[] = [];
  check: any;
  deleteBds: Bds;

  constructor(private bdsService: BdsService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.bdsService.getAll().subscribe(batDongSans => {
      this.batDongSans = batDongSans.content;
      console.log(this.batDongSans);;
    });
  }

  onOpenEditModal(a: Bds): void {
    this.deleteBds = a;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#deleteModal');
    container.appendChild(button);
    this.check = true;
    button.click();
  }

  delete(event) {
    this.bdsService.deleteBds(this.deleteBds).subscribe(() => {
      event.click();
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      alert('error');
    });
  }
}
