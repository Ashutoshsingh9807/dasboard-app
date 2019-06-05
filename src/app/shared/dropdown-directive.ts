import { Directive, HostListener, HostBinding, Injectable, OnInit } from "@angular/core";


@Injectable()
@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit {
   @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
   
    constructor() {}
    ngOnInit() {}
     
} 