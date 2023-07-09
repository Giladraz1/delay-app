import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secretNumber: number | null = null;
  guess: number | null = null;
  message: string = '';
  successfulGuesses: number[] = [];
  isGameStarted: boolean = false;

  generateSecretNumber() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Secret Number:', this.secretNumber);
  }

  startGame() {
    this.generateSecretNumber();
    this.resetGame();
    this.isGameStarted = true; // Set the game start flag
  }

  resetGame() {
    this.successfulGuesses = [];
    this.guess = null;
    this.message = '';
  }

  checkGuess() {
    if (this.guess !== null && this.secretNumber !== null) {
      const parsedGuess = parseInt(this.guess.toString(), 10);
      if (!this.isGameStarted) {
        this.startGame(); // Start a new game when the game hasn't started yet
      }
      if (parsedGuess === this.secretNumber) {
        this.message = 'Congratulations! You guessed the correct number.';
        this.successfulGuesses.push(parsedGuess);
        console.log('successfulGuesses:', this.successfulGuesses);
        this.generateSecretNumber(); // Generate a new secret number immediately
      } else if (parsedGuess < this.secretNumber) {
        this.message = 'Too low. Try again.';
      } else {
        this.message = 'Too high. Try again.';
      }
    }
  }
}
