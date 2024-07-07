import { Component, computed, input, signal } from '@angular/core';
import { AnswerStatus } from '../../../domain/models';

@Component({
  selector: 'app-result-list-item',
  standalone: true,
  imports: [],
  template: `
    <div class="theme" (click)="toggle()">
      <div class="theme-label">{{ theme() }}</div>
      <div>{{ expandIndicator() }}</div>
    </div>
    <table [class.collapsed]="isCollapsed()" (click)="toggle()">
      <thead>
        <tr>
          <th class="correct-answer">正解</th>
          <th class="member">かまど</th>
          <th class="member">マンスーン</th>
          <th class="member">モンナイ</th>
          <th class="member">みくのしん</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="{{ collectAnswer() }}">
            {{ collectAnswer() }}
          </td>
          <td class="{{ resultToSymbols()['comi_kamado'] }}">
            {{ resultToSymbols()['comi_kamado'] }}
          </td>
          <td class="{{ resultToSymbols()['mansooon'] }}">
            {{ resultToSymbols()['mansooon'] }}
          </td>
          <td class="{{ resultToSymbols()['amanattif'] }}">
            {{ resultToSymbols()['amanattif'] }}
          </td>
          <td class="{{ resultToSymbols()['no_inngurissyu'] }}">
            {{ resultToSymbols()['no_inngurissyu'] }}
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: `
    :host {
      display: grid;
      background-color: white;
      border: 1px solid black;
    }

    .theme {
      padding: 4px 8px;
      display: flex;
      align-items: center;

      .theme-label {
        flex: 1;
      }
    }

    table.collapsed {
      display: none;
    }

    th {
      font-size: 12px;
    }

    th.correct-answer {
      background-color: #FEC803;
      width: 12%;
    }

    th.member {
      width: 22%;
    }

    td {
      text-align: center;
      font-weight: bold;
    }

    td.A , td.◯{
      color: red;
    }

    td.B, td.✕
    {
      color: blue;
    }
  `,
})
export class ResultListItemComponent {
  theme = input.required<string>();
  collectAnswer = input.required<'A' | 'B'>();
  memberResults = input.required<{ [key: string]: AnswerStatus }>();

  expandedState = signal<'expanded' | 'collapsed'>('collapsed');

  resultToSymbols = computed<{ [key: string]: string }>(() => {
    const newObj: { [key: string]: string } = { ...this.memberResults() };

    for (const key in newObj) {
      if (newObj[key] === 'CORRECT') {
        newObj[key] = '◯';
      } else if (newObj[key] === 'INCORRECT') {
        newObj[key] = '✕';
      } else {
        newObj[key] = '-';
      }
    }

    return newObj;
  });

  isCollapsed = computed<boolean>(() => this.expandedState() === 'collapsed');

  expandIndicator = computed<'▼' | '▲'>(() =>
    this.expandedState() === 'expanded' ? '▲' : '▼'
  );

  toggle(): void {
    this.expandedState.update((value) =>
      value === 'expanded' ? 'collapsed' : 'expanded'
    );
  }
}
