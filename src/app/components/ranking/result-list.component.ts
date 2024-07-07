import { Component, signal } from '@angular/core';
import { AnswerStatus } from '../../../domain/models';
import { abTestData } from '../../../data/data';
import { ResultListItemComponent } from './result-list-item.component';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [ResultListItemComponent],
  template: `
    <h2>テスト結果</h2>
    <ul>
      @for(data of abTestData(); track $index) {
      <app-result-list-item
        [theme]="data.theme"
        [collectAnswer]="data.correctAnswer"
        [memberResults]="data.memberResponses"
      />
      }
    </ul>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    h2 {
      text-align: center;
      color: white;
      -webkit-text-stroke: 1px rgba($color: #000000, $alpha: 0.86);
      text-shadow: 3px 3px rgba($color: #000000, $alpha: 0.86);
      margin: unset;
    }

    ul{
      margin-block: unset;
      padding-inline: unset;
      list-style-type: none;
    }
  `,
})
export class ResultListComponent {
  abTestData = signal<
    {
      videoId: string;
      startTime: number;
      theme: string;
      recipe: string;
      correctAnswer: 'A' | 'B';
      memberResponses: { [key: string]: AnswerStatus };
    }[]
  >(abTestData);
}
