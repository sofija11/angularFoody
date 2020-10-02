import { HttpClient } from '@angular/common/http';
import { CategoryService } from './../category.service';
import { MeniService } from './../meni.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-one-meni-food',
  templateUrl: './one-meni-food.component.html',
  styleUrls: ['./one-meni-food.component.css']
})
export class OneMeniFoodComponent implements OnInit {
  id;
  menus;
  menu;
  categories;
  category;

  constructor(private service: FoodService,
    private serviceC: CategoryService,
    private http: HttpClient,
    private route: ActivatedRoute) 
    {
      this.route.params.subscribe(( params: Params) => {
        this.id = +this.route.snapshot.params['id']
      });
    }

  ngOnInit(){

    this.service.getAllFoods().subscribe(
      Response=>{
        this.menus=Response;
        this.menu=this.menus.find(m=>m.id === this.id);
        //console.log(this.menu);

      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
    
    this.serviceC.GetAllCategories().subscribe(
      Response => {
        this.categories = Response;
        console.log(this.categories);
        this.category = this.categories.find(element => element.id === this.menu.groupId);
        console.log(this.category);
      
        
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    )
  }

}
