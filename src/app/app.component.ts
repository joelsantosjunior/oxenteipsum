import { Component } from '@angular/core';
import * as data from '../../frases.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sentences: number;
  public content = '';
  public data: Array<string> = data.frases;

  constructor() {
    this.sentences = 1;
    this.generateText();
  }

  public generateText(): void {
    this.content = '';
    for (let i = 0; i < this.sentences; i++) {
      for (let j = 0; j < this.getRandomInt(5, 8); j++) {
        this.content += `${this.data[this.getRandomInt(0, this.data.length)]} `;
      }

      if (i < this.sentences - 1) {
        this.content += '\r\n\r\n';
      }
    }
  }

  public copy(): void {}

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
