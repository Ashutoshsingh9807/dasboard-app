import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/services/toggle.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {
  isSearhcCollapsed:boolean;
  constructor(private toggleService:ToggleService) { }
  
  ngOnInit() {
  }
  hide_searchbar(remove_class:boolean) {
  
    this.toggleService.toggle_searchbar();
   
  }
 

}
