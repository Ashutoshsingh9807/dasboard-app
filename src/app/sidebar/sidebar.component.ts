import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed:boolean;
  objectKeys = Object.keys;
  sidebar_content = {
  "Message":[{"name":"Message List","route":"/message-list"}, {"name":"New Message","route":"/new-message"}], 
  "Goals" : [{"name":"Big Goals","route":"/"}, {"name":"Recurrect goals","route":"/"}, {"name":"New","route":"/"}, {"name":"Future Goals","route":"/"}, {"name":"Weekly Goals","route":"/"}], 
  "People" : [{"name":"Canddidates","route":"/"}, {"name":"New","route":"/"}, {"name":"Opportunity Pool","route":"/"}, {"name":"Skill Pool","route":"/"}, {"name":"Cert Status","route":"/"}, {"name":"Specialist Pool","route":"/"}], 
  "Work" : [{"name":"Team space","route":"/"}, {"name":"new","route":"/"}, {"name":"Client feedback","route":"/"},{"name":"Propects","route":"/"}, {"name":"New","route":"/"}, {"name":"Meeting","route":"/"}, {"name":"New","route":"/"}, {"name":"Asset Management(AMS)","route":"/"}],
  "Money": [{"name":"Reimbursement","route":"/"}, {"name":"new","route":"/"}],
  "Catalyst" : [{"name":"TestCAT feedback","route":"/"}, {"name":"CodeCAT feedback","route":"/"}, {"name":"new","route":"/"}, {"name":"PointCAT","route":"/"}, {"name":"New","route":"/"}, {"name":"ToolCAT","route":"/"}, {"name":"new","route":"/"}, {"name":"CommCAT","route":"/"}, {"name":"New","route":"/"}, {"name":"Catalyst Reports","route":"/"}], 
  "Knowledge":[{"name":"Tips","route":"/"}, {"name":"new","route":"/"}, {"name":"Articles","route":"/"}, {"name":"new","route":"/"}, {"name":"Seminars","route":"/"}, {"name":"new","route":"/"}, {"name":"IT Seminars -On Demand","route":"/"}, {"name":"Learning Matter","route":"/"}, {"name":"new","route":"/"}, {"name":"Questions","route":"/"}, {"name":"SimulQuestion","route":"/"}, {"name":"new","route":"/"}, {"name":"test","route":"/"}, {"name":"new","route":"/"}, {"name":"cources","route":"/"}, {"name":"new","route":"/"}],
  "Tools": [{"name":"Q&A","route":"/"}, {"name":"new","route":"/"}, {"name":"IWantINeed","route":"/"},{"name":"Ideas","route":"/"}, {"name":"new","route":"/"}, {"name":"MTI Contest","route":"/"}, {"name":"Initiatives","route":"/"}, {"name":"new","route":"/"}, {"name":"WatchList","route":"/"}, {"name":"Documents","route":"/"}, {"name":"new","route":"/"}, {"name":"pools","route":"/"}, {"name":"new","route":"/"}, {"name":"People- Blood group","route":"/"}],
  "My Profile": [{"name":"My Profile","route":"/"}, {"name":"My Mirror","route":"/"}, {"name":"Public profile","route":"/"}, {"name":"My Network","route":"/"},{"name":"Insurance Details","route":"/"},{"name":"Profile for Client","route":"/"},{"name":"Leaves","route":"/"},{"name":"new","route":"/"}, {"name":"Change Password","route":"/"}, {"name":"logout","route":"/"}]};
  constructor(private toggleService:ToggleService) {
  }

  ngOnInit() {
  }
  isObject(value) {
    if(typeof value === 'object' && value !== null) return true;
    else return false;
  }
  
  local_sidebar_content = this.sidebar_content[0];
} 
