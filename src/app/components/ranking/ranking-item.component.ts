import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ranking-item',
  standalone: true,
  template: ` <div class="rank rank-{{ rank() }}">
      <span><span class="prefix">No.</span>{{ rank() }}</span>
    </div>
    <div class="name">{{ name() }}</div>
    <div class="accuracy">
      <div class="accuracy-label">正解率</div>
      <div>{{ accuracy() }}<span class="unit">%</span></div>
    </div>`,
  styles: `
    :host {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 8px 8px;
      gap: 12px;
      border: solid 2px black;
    }

    .rank, .accuracy {
      font-family: "Peralta";
    }

    .rank {
      position: relative;
      display: inline-block;
      font-size: 24px;

      .prefix {
        font-size: 12px;
      }
    }

    .rank-1::before {
      content: '';
      position: absolute;
      bottom:0;
      left: -1px;
      width: 36px;
      height: 28px;
      clip-path: polygon(50% 0%, 70% 50%, 100% 0, 90% 100%, 10% 100%, 0 0, 30% 50%);
      background: #FEC803;
      z-index: 0;
    }

    .rank span{
      position: relative;
      z-index: 1;
    }

    .name {
      flex: 1;
      font-family: 'Mochiy Pop One';
      font-size: 28px;
    }

    .accuracy {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20px;
    }

    .accuracy-label {
      font-family: 'Mochiy Pop One';
      font-size: 12px;
      line-height: 1;
    }

    .unit {
      margin-left: 4px;
      font-size: 16px;
    }
  `,
})
export class RankingItemComponent {
  rank = input.required<number>();
  name = input.required<string>();
  accuracy = input.required<number>();
}
