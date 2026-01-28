import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Series } from '../series/series';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Series],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('dockerflix');
}
