import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bds} from "../model/bds";
import {Observable} from "rxjs";
import {Product} from "../model/product";


@Injectable({
  providedIn: 'root'
})
export class BdsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/list');
  }

  saveBds(bds: Bds): Observable<Bds> {
    return this.http.post<Bds>('http://localhost:8080/list', bds);
  }

  findById(id: number): Observable<Bds> {
    return this.http.get<Bds>(`http://localhost:8080/list/${id}`);
  }

  updateBds(id: number, bds: Bds): Observable<Bds> {
    return this.http.put<Bds>(`http://localhost:8080/list/${id}`, bds);
  }

  deleteBds(a: Bds): Observable<Bds> {
    return this.http.delete<Bds>(`http://localhost:8080/list/${a.id}`);
  }
}
