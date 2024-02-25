import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent {
  public progreso = signal<number>(50);
  public porcentaje = computed<string>( () => `${this.progreso()}%` );

  cambiarValor(valor: number) {
    if (this.progreso() >= 100 && valor >= 0) {
      return this.progreso.set(100);
    }
    if (this.progreso() <= 0 && valor < 0) {
      return this.progreso.set(0);
    }

    this.progreso.set(this.progreso() + valor);
  }
}
