import { Component } from '@angular/core';
import { MeniService } from './meni.service';
import { Menu } from './menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Foody';
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
