import { ThrowStmt } from '@angular/compiler';
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

  sidebarTitleVisibility: String;
  sidebarItemOpacity: String;
  
  animationName: String;
  animationIterationCount: Number;
  animationTimingFunction: String;
  animationDuration: String;

  tooltipTextNum: Number;

  sideMenuItems = sideMenuItemsJSON;

  constructor(private render: Renderer2, private elem: ElementRef) {
    this.isMenuOpened = false;

    this.sidebarWidth = '3.5vw';

    this.sidebarTitleVisibility = "hidden";
    this.sidebarItemOpacity = '0';

    this.animationName = "";
    this.animationIterationCount = 1;
    this.animationTimingFunction = "";
    this.animationDuration = "";

    this.tooltipTextNum = 1;
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {

    if(this.isMenuOpened == true) {
      this.sidebarWidth = '3.5vw';

      this.sidebarTitleVisibility = "hidden";
      this.sidebarItemOpacity = '0';
      
      this.animationName = "fadeOutOpacity";
      this.animationIterationCount = 1;
      this.animationTimingFunction = "ease-in";
      this.animationDuration = "0.2s";
    }
    else if(this.isMenuOpened == false) {
      this.sidebarWidth = '15vw';

      this.sidebarTitleVisibility = "visible";
      this.sidebarItemOpacity = '1';

      this.animationName = "fadeInOpacity";
      this.animationIterationCount = 1;
      this.animationTimingFunction = "ease-in";
      this.animationDuration = "0.6s";
    }

    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleTooltipText(): void {
    if(this.tooltipTextNum == 1){
      this.tooltipTextNum = 2;
    }
    else if(this.tooltipTextNum == 2){
      this.tooltipTextNum = 3;
    }
    else if(this.tooltipTextNum == 3){
      this.tooltipTextNum = 4;
    }
    else if(this.tooltipTextNum == 4){
      this.tooltipTextNum = 1;
    }
  }
}
