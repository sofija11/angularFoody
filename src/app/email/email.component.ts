import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    let  mejl = JSON.parse(localStorage.getItem(' mejl')) ?? [];

     mejl.push(form.value.email);
    localStorage.setItem(' mejl', JSON.stringify( mejl));
    alert("email sent");
    form.resetForm();
  }
}
