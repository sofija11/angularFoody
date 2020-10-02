import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from './paths';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private service: HttpClient) { }

  getAllFoods() {
    const foods = this.service.get(paths.foods);
    return foods;
  }
}
