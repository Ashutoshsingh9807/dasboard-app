import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/services/toggle.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isCollapsed:boolean;
  constructor(private toggleService:ToggleService) { }

  ngOnInit() {
  }

}
