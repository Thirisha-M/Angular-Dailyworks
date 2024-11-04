import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  templateUrl: './ng-class-demo.component.html',
  styleUrls: ['./ng-class-demo.component.css']
})
export class NgClassDemoComponent {
  searchText:string="";

  updateSearchText(event:any){
    this.searchText=event.target.value;
  }
}
