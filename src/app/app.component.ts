import {Component} from '@angular/core';
import { colorSelectroButtonsJSON } from './mocks/color-selector-buttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CTCWebsite';
  colorSelectorButtons = colorSelectroButtonsJSON;
  backgroundColor: String = "#689d71";

  public setBackgroundColor(backgroundColor: String){
    this.backgroundColor = backgroundColor;
  }
}
