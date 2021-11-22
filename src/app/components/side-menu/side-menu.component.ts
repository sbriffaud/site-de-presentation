import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { sideMenuJSON } from 'src/app/mocks/side-menu-mock';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  isMenuOpened: Boolean;

  sidebarWidth: String;
  sidebarOpacity: Number;
  animationName: String;
  animationIterationCount: Number;
  animationTimingFunction: String;
  animationDuration: String;
  deconnectionSectionPaddingRight: String;

  sideMenuItems = sideMenuJSON;

  constructor(private render: Renderer2, private elem: ElementRef) {
    this.isMenuOpened = false;

    this.sidebarWidth = '3.5vw';
    this.sidebarOpacity = 0;
    this.deconnectionSectionPaddingRight = '2vw';

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

      this.sidebarOpacity = 0;
      this.animationName = "fadeOutOpacity";
      this.animationIterationCount = 1;
      this.animationTimingFunction = "ease-in";
      this.animationDuration = "0.2s";

      this.deconnectionSectionPaddingRight = '2vw';
    }
    else if(this.isMenuOpened == false) {
      this.sidebarWidth = '15vw';

      this.sidebarOpacity = 1;
      this.animationName = "fadeInOpacity";
      this.animationIterationCount = 1;
      this.animationTimingFunction = "ease-in";
      this.animationDuration = "0.6s";

      this.deconnectionSectionPaddingRight = '0%';
    }

    this.isMenuOpened = !this.isMenuOpened;
  }

}
