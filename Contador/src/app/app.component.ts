import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Contador';
  appValor: number = 3;

  eventListener(event: number): void {
    this.appValor = event;
  }
  contadorACero(): void {
  this.appValor = 0;
  }
}
