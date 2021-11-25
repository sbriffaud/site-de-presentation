import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const mot =
  [
    {"lettre":"g","position":1},
    {"lettre":"o","position":2},
    {"lettre":"u","position":3},
    {"lettre":"t","position":4},
    {"lettre":"t","position":5},
    {"lettre":"e","position":6}
  ]

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  mot = mot;

  waterDropVisibility: string;
  
  areLettersInTheirBoxes: boolean[];

  cases: HTMLDivElement[];

  constructor(){
    this.cases = [];
    this.areLettersInTheirBoxes = [false, false, false, false, false, false];
    this.waterDropVisibility = "hidden";
  }
  
  ngOnInit(): void {
  }

  setCaseHeight(i: Number, d: HTMLDivElement): string {
    if(this.cases.indexOf(d) == -1){
      this.cases.push(d);
    }

    return (i.toString() + "px")
  }

  isLetterInRightBox(ref: HTMLElement, numero: number): void {
    
    var currentCase = this.cases[numero-1];

    const hautCase = currentCase.getBoundingClientRect().y;
    const basCase = currentCase.getBoundingClientRect().y + 30;
    const gaucheCase = currentCase.getBoundingClientRect().x;
    const droiteCase = currentCase.getBoundingClientRect().x + 30;

    var xLettre = ref.getBoundingClientRect().x + 5;
    var yLettre = ref.getBoundingClientRect().y + 12.5;

    if((xLettre > gaucheCase) && (xLettre < droiteCase) && (yLettre > hautCase) && (yLettre < basCase)){
      this.areLettersInTheirBoxes[numero-1] = true;
    }
    else{
      this.areLettersInTheirBoxes[numero-1] = false;
    }
    
    if(this.areLettersInTheirBoxes.indexOf(false) == -1){
      this.waterDropVisibility = "visible";
    }else{
      this.waterDropVisibility = "hidden";
    }
  }

}
