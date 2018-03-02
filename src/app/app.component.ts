import { Component } from '@angular/core';
import { Card } from './card/card';
import { WrestlerService } from './wrestler/wrestler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[];

  constructor(public wrestlerService: WrestlerService) {
    this.cards = wrestlerService.getCards();
  }
}
