import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BdsService} from "../../services/bds.service";
import {DanhMuc} from "../../model/danh-muc";
import {Bds} from "../../model/bds";
import {DanhMucService} from "../../services/danh-muc.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bds-create',
  templateUrl: './bds-create.component.html',
  styleUrls: ['./bds-create.component.css']
})
export class BdsCreateComponent implements OnInit {
  danhMucs: DanhMuc[] = [];
  bds: Bds = {};

  bdsForm: FormGroup = new FormGroup({
    id: new FormControl(),
    danhMuc: new FormControl(),
    vungMien: new FormControl(),
    banLa: new FormControl(),
    banDangTin: new FormControl(),
    tinhTrang: new FormControl(),
    diaChi: new FormControl("", Validators.required),
    dienTich: new FormControl("", [Validators.required, Validators.pattern('^[0]*[1-9]+[0-9]*([\.]([0-9]+))?$')]),
    huong: new FormControl(),
    tuaDe: new FormControl("", Validators.required),
    noiDung: new FormControl("", Validators.required),
    gia: new FormControl("", [Validators.required, Validators.pattern('^[0]*[1-9]+[0-9]*([\.]([0-9]+))?$')]),
    hinhAnh: new FormControl(),
    trangThai: new FormControl(),
    ngayDang: new FormControl()
  });


  // constructor(private bdsService: BdsService,
  //             private danhMucService: DanhMucService,
  //             private router: Router) {
  // }

  constructor(private danhMucService: DanhMucService,
              private bdsService: BdsService,
              private router: Router) {
    this.danhMucService.getAll().subscribe(data => {
      this.danhMucs = data;
      let now = new Date();
      this.bdsForm = new FormGroup({
        vungMien: new FormControl('Ha Noi'),
        danhMuc: new FormControl(this.danhMucs[0]),
        banLa: new FormControl('Ca Nhan'),
        banDangTin: new FormControl('Can Ban'),
        tinhTrang: new FormControl('Moi'),
        diaChi: new FormControl('', [Validators.required]),
        dienTich: new FormControl('', [Validators.required, Validators.pattern('^[0]*[1-9]+[0-9]*([\.]([0-9]+))?$')]),
        huong: new FormControl('Bac'),
        tuaDe: new FormControl('', [Validators.required]),
        noiDung: new FormControl('', [Validators.required]),
        gia: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
        ngayDang: new FormControl(now.toString()),
        hinhAnh: new FormControl(''),
        trangThai: new FormControl(),
      });
    });
  }

  ngOnInit(): void {
    this.getAllDanhMuc()
  }

  checkDienTich() {
    let dienTich = +this.bdsForm.get('dienTich').value;
    if (dienTich <= 20) {
      this.bdsForm.get('dienTich').setErrors({dienTichMin: true});
    }
  }

  checkGia() {
    let gia = +this.bdsForm.get('gia').value;
    if (gia <= 20) {
      this.bdsForm.get('gia').setErrors({giaMin: true});
    }
  }

  get diaChi() {
    return this.bdsForm.get('diaChi');
  }

  get dienTich() {
    return this.bdsForm.get('dienTich');
  }

  get tuaDe() {
    return this.bdsForm.get('tuaDe');
  }

  get noiDung() {
    return this.bdsForm.get('noiDung');
  }

  get gia() {
    return this.bdsForm.get('gia');
  }



  submit() {

    if (this.bdsForm.valid) {
      const bds = this.bdsForm.value;
      this.bdsService.saveBds(bds).subscribe(() => {
        alert('Tạo thành công');
        this.bdsForm.reset();
      }, e => console.log(e));
    }
  }

  private getAllDanhMuc() {
    this.danhMucService.getAll().subscribe(danhMucs => {
      this.danhMucs = danhMucs;
    });
  }
}
