import { Component, input } from '@angular/core';
import { RankingItem } from '../../../domain/models';
import { RankingItemComponent } from './ranking-item.component';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [RankingItemComponent],
  template: `
    <ol>
      @for(item of ranking(); track item.member; let i = $index) {
      <li>
        <app-ranking-item
          [rank]="i + 1"
          [name]="item.member"
          [accuracy]="item.accuracy"
        />
      </li>
      }
    </ol>
  `,
  styles: `
    ol {
      list-style-type: none;
      padding-inline: unset;
      margin-block: unset;
    }

    li {
      margin-bottom: 4px;
    }

    li:last-child {
      margin-bottom: unset;
    }
  `,
})
export class RankingComponent {
  ranking = input.required<RankingItem[]>();
}
