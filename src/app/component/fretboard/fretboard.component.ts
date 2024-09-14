import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fretboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './fretboard.component.html',
  styleUrl: './fretboard.component.scss'
})
export class FretboardComponent {
  rows = Array.from({ length: 6 });  // 6 strings
  columns = Array.from({ length: 24 });  // 12 frets

  // 2D array to store the state of each note
  noteStates: boolean[][] = Array.from({ length: 6 }, () => Array(12).fill(false));

  isActive(rowIndex: number, colIndex: number): boolean {
    return this.noteStates[rowIndex][colIndex];
  }

  toggleNoteState(rowIndex: number, colIndex: number): void {
    this.noteStates[rowIndex][colIndex] = !this.noteStates[rowIndex][colIndex];
  }

}
