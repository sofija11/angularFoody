import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class MeniService {

  constructor(private service: HttpClient) { }

  getAllMenues() {
    const menu = this.service.get(paths.menu);
    return menu;
  }
}
