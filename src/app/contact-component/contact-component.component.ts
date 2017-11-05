import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {

  constructor() { }

 onSubmit(form:NgForm){
  console.log(form);
 }
}
