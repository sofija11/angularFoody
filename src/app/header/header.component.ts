import { MeniService } from './../meni.service';
import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private services: MeniService) { }
  public menu: Menu[];
  ngOnInit() {
    this.services.getAllMenues().subscribe(
      (Response: Menu[] ) => {
        this.menu = Response;
      },
      error => {
        alert('An error has occured. Please contact support team. Error: ' + error);
      }
    );
  }

}
