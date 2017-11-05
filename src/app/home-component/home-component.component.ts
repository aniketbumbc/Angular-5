import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit, OnDestroy {
  onNumber: Subscription;

  constructor() { }

  ngOnInit() {
    const mynumber = Observable.interval(2000);
    this.onNumber = mynumber.subscribe(
      (number: number) => {
        console.log(number);
      });
  }
  ngOnDestory() {
    this.onNumber.unsubscribe(); //cancel clean up subscriptions 
  }

}
