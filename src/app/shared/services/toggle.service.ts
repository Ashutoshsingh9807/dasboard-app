import {Injectable} from '@angular/core';

@Injectable()
export class ToggleService {
   private isCollapsed:boolean = true;
   private isSearhcCollapsed:boolean = false;
    toggle_sidebar() {
        this.isCollapsed = !this.isCollapsed;
    }
    getIsCollapes() {
        return this.isCollapsed;
    }
    toggle_searchbar() {
        this.isSearhcCollapsed = !this.isSearhcCollapsed;
    }
    getIsSearchCollapse() {
        return this.isSearhcCollapsed;
    }
   
}