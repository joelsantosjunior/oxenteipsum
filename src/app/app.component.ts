import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onHover = false;
  title = 'oxenteipsum';
  public sentences: number;
  text =
    'Magna cupidatat ipsum laborum non pariatur commodo qui enim do enim excepteur enim labore. Et incididunt ad ipsum consequat incididunt. Minim anim dolor id nostrud fugiat duis sit. Magna sint proident Lorem deserunt dolor ipsum eu eu eu excepteur ullamco.';
  content = '';

  constructor() {
    this.sentences = 1;
    this.generateText();
  }
  public generateText(): void {
    this.content = '';
    for (let i = 0; i < this.sentences - 1; i++) {
      this.content += this.text + '\r\n\r\n';
    }

    this.content += this.text;
  }

  public copy(): void {}
}
