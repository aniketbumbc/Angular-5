import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-exp-component',
  templateUrl: './exp-component.component.html',
  styleUrls: ['./exp-component.component.css']
})
export class ExpComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  GoHome() {
  this.router.navigate(['/']);
  }
}
