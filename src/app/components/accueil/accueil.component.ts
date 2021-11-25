import { Component, OnInit } from '@angular/core';

const mot =
  [
    {"lettre":"g","position":"1"},
    {"lettre":"o","position":"2"},
    {"lettre":"u","position":"3"},
    {"lettre":"t","position":"4"},
    {"lettre":"t","position":"5"},
    {"lettre":"e","position":"6"}
  ]

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  mot = mot;
  
  ngOnInit(): void {
  }

}
