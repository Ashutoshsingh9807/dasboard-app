import { Component, OnInit} from '@angular/core';
import { ToggleService } from '../shared/services/toggle.service';
import {doToday} from '../shared/do-today.model';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  
  isCollapsed:boolean;
  today: number = Date.now();
  
  dotodays: doToday[] = [
    {value: 'steak-0', viewValue: 'Worked on Rhapsody'},
    {value: 'pizza-1', viewValue: 'Discussed with Sabina'},
    {value: 'tacos-2', viewValue: 'Will work on PSYbooks'}
  ];

  constructor(private toggleService:ToggleService) { }

  ngOnInit() {

  } 
}
