import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent {
  searchText:string='';

  updateSearchText(event:any){
    this.searchText=event.target.value;
  }
  }


