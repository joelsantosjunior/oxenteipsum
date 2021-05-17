import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

// Frases coletadas do site: https://www.belasmensagens.com.br/frases-nordestinas
import * as data from '../../frases.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('true', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition('false => true', animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')),
      transition('true => false', animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ]),
  ]
})
export class AppComponent {
  public qtdParagraph: number;
  public generatedText = '';
  public data: Array<string> = data.frases;
  public fadeInTooltip = false;

  constructor() {
    this.qtdParagraph = 1;
    this.generateText();
  }

  public generateText(): void {
    
    this.generatedText = '';
    
    for (let i = 0; i < this.qtdParagraph; i++) {

      let sentenceSize = this.getRandomInt(5, 8);
      let content = new Set<string>();

      do {
        content.add(this.data[this.getRandomInt(0, this.data.length)]);
      } while (content.size < sentenceSize);
      
      this.generatedText += [...content].reduce((acc, cur) => `${acc} ${cur}`);
      
      if (i < this.qtdParagraph - 1) {
        this.generatedText += '\r\n\r\n';
      }
    }
  }

  public async copy(content: string): Promise<void> {
    await navigator.clipboard.writeText(content);
    this.fadeInTooltip = true;
    await new Promise(resolve => setTimeout(() => resolve(true), 1000));
    this.fadeInTooltip = false;
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
