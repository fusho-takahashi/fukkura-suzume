import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ranking } from '../data/data';
import { RankingComponent } from './components/ranking/ranking.component';
import { RankingItem } from '../domain/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RankingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ranking = signal<RankingItem[]>(ranking);

  orderedRanking = computed(() =>
    this.ranking().sort((a, b) => b.accuracy - a.accuracy)
  );
}
