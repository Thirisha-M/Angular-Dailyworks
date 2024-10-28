import { Component } from '@angular/core';
import { getstartedClass } from 'src/services.ts/getstarted.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css'],
  providers:[getstartedClass]
})
export class HomecomponentComponent {
  Buttonvalue:string="Get Started"
  constructor(private get:getstartedClass){
  }
  onclick(){
    this.get.getstartedservice("started👌")
  }

}
