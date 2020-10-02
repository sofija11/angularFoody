import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food.service';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-menifood',
  templateUrl: './menifood.component.html',
  styleUrls: ['./menifood.component.css'],
  animations: [
    trigger('fade', [
     
      transition('void => *', [
        style({opacity:0.4}),
        animate(3000)
      ])
    ])
  ]
})
export class MenifoodComponent implements OnInit {
 public searchText;
 public foods;
 public food;
 public categories;
 public filter;
 public sortC;
 p: number = 1;
  constructor(private service:FoodService ,private serviceC: CategoryService) { }
 
  getCategory(category) {
    if(category !== 0) {
      this.filter = this.foods;
      this.filter = this.foods.filter(xx => xx.groupId === category);
    }
    else {
      this.filter = this.foods;
    }
  }
  ngOnInit() {
    this.service.getAllFoods().subscribe(
      Response => {
        this.foods = Response;
        this.filter = this.foods.sort((n1,n2) => {
          if (n1.name > n2.name) {
              return 1;
          }

          if (n1.name < n2.name) {
              return -1;
          }

          return 0;
      });
        
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    )
    this.serviceC.GetAllCategories().subscribe(
      Response => {
        this.categories = Response;
        this.sortC = this.categories.sort((n1,n2) => {
          if (n1.name > n2.name) {
              return 1;
          }

          if (n1.name < n2.name) {
              return -1;
          }

          return 0;
      });
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

}
