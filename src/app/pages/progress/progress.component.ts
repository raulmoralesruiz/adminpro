import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  progreso1: number = 25;
  progreso2: number = 35;

  get obtenerProgreso1() {
    return `${this.progreso1}%`;
  }

  get obtenerProgreso2() {
    return `${this.progreso2}%`;
  }
}
