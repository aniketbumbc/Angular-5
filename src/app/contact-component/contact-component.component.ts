import { Component,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {
@ViewChild('f') EmailForm:NgForm;
  genders=['Male','Female'];
  user={
    Email:'',
    Password:'',
    City:'',
    Address:'',
    Zipcode:'',
    State:''
  };
  constructor() { }

 onSubmit(){
this.user.Email=this.EmailForm.value.email;
this.user.Password=this.EmailForm.value.password;
this.user.City=this.EmailForm.value.city;
this.user.Address=this.EmailForm.value.address;
this.user.Zipcode=this.EmailForm.value.zipcode;
this.user.State=this.EmailForm.value.state;
//console.log(this.EmailForm);

 }
}
