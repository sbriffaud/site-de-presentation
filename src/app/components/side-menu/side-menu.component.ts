import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { sideMenuItemsJSON } from 'src/app/mocks/side-menu-mock';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  isMenuOpened: Boolean;

  sidebarWidth: String;

  sidebarItemOpacity: String;
  
  animationName: String;
  animationIterationCount: Number;
  animationTimingFunction: String;
  animationDuration: String;

  sideMenuItems = sideMenuItemsJSON;

  constructor(private render: Renderer2, private elem: ElementRef) {
    this.isMenuOpened = false;

    this.sidebarWidth = '3.5vw';

    this.sidebarItemOpacity = '0';

    this.animationName = "";
    this.animationIterationCount = 1;
    this.animationTimingFunction = "";
    this.animationDuration = "";
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {

    if(this.isMenuOpened == true) {
      this.sidebarWidth = '3.5vw';

      this.sidebarItemOpacity = '0';
      
      this.animationName = "fadeOutOpacity";
      this.animationIterationCount = 1;
      this.animationTimingFunction = "ease-in";
      this.animationDuration = "0.2s";
    }
    else if(this.isMenuOpened == false) {
      this.sidebarWidth = '15vw';

      this.sidebarItemOpacity = '1';

      this.animationName = "fadeInOpacity";
      this.animationIterationCount = 1;
      this.animationTimingFunction = "ease-in";
      this.animationDuration = "0.6s";
    }

    this.isMenuOpened = !this.isMenuOpened;
  }

}
