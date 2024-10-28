import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent {

list={
  product:"Product",
  solution:"Solutions",
  resources:"Resources",
  pricing:"Pricing",
  img:"/assets/images/wix logo.png"
}
}
