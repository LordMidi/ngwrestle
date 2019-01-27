import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public card: Card;
  properties: string[];
  propertiesKeys: string[];
  public isActive: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.card.properties) {
      this.properties = Object.values(this.card.properties);
      this.propertiesKeys = Object.keys(this.card.properties);
    }
  }

  public toggleActive() {
    this.isActive = !this.isActive;
  }

}