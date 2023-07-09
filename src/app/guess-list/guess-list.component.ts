import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guess-list',
  template: `
    <h2>Successful Guesses:</h2>
    <p>Correct Answers: {{ guesses.length }}</p>
    <ul>
      <li *ngFor="let guess of guesses">{{ guess }}</li>
    </ul>
  `
})
export class GuessListComponent {
  @Input() guesses: number[] = [];
}
