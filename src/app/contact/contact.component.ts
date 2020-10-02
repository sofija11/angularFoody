
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('over', [
     state('show',style({
       opacity:1
     })),
     state('hide',style({
      opacity:0
    })),
     transition('show => hide',animate(600)),
     transition('hide=> show',animate(1000))

    ])
  ]
})
export class ContactComponent implements OnInit {
  defSubj="MessageFOODY";
  show=false;
  constructor() { }

  ngOnInit(): void {
  }
  get stateName(){
    return this.show ? 'show' : 'hide'
  }
  toggle(){
    this.show=!this.show;
  }
  onSubmit(form: NgForm) {
   

    let contactsPoruka = JSON.parse(localStorage.getItem('contactsPoruka')) ?? [];

    contactsPoruka.push(form.value);
    localStorage.setItem('contactsPoruka', JSON.stringify(contactsPoruka));
    alert("Message is sent.");
    form.resetForm();
  }

}
