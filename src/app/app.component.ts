import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'App Angular';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter +=value
  }
  decreaseBy(value:number):void{
    this.counter -=value
  }

  reset(value:number):void{
    this.counter = value
  }

}
