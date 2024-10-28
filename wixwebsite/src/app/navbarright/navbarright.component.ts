import { Component } from '@angular/core';
import { getstartedClass } from 'src/services.ts/getstarted.service';

@Component({
  selector: 'app-navbarright',
  templateUrl: './navbarright.component.html',
  styleUrls: ['./navbarright.component.css'],
  providers:[getstartedClass]
})
export class NavbarrightComponent {
  Buttonvalue:string="Get Startedd"

  list={
    img:"/assets/images/net logo.png"
  }
  constructor(private get: getstartedClass){
  }

   onclick(){
    this.get.getstartedservice("started")
   }
}

