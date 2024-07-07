import { AnswerStatus, RankingItem } from '../domain/models';

export const ranking: RankingItem[] = [
  { member: 'かまど', accuracy: 55.6 },
  { member: 'モンゴルナイフ', accuracy: 72.4 },
  { member: 'マンスーン', accuracy: 66.7 },
  { member: 'みくのしん', accuracy: 63.3 },
];

export const members: {
  id: string;
  name: string;
  color: string;
  order: number;
}[] = [
  {
    id: 'comi_kamado',
    name: 'かまど',
    color: 'E01A17',
    order: 1,
  },
  {
    id: 'mansooon',
    name: 'マンスーン',
    color: '19A36B',
    order: 2,
  },
  {
    id: 'amanattif',
    name: 'モンゴルナイフ',
    color: 'DF8D08',
    order: 3,
  },
  {
    id: 'no_inngurissyu',
    name: 'みくのしん',
    color: 'E016B5',
    order: 4,
  },
] as const;

export const youtubeVideos: { date: string; title: string; id: string }[] = [
  {
    date: '2023/06/01',
    title: '【検証】パスタ茹でるときの塩って意味ある？？？？？？？？？',
    id: 'eDrHz8cfEnw',
  },
  {
    date: '2023/08/03',
    title: '【検証】ハンバーグに入れるナツメグって意味ある？？？？？？？？？',
    id: 'rYuaIBJJQME',
  },
  {
    date: '2023/11/13',
    title: '【検証】料理に三温糖を使うと美味しくなるって本当？？？？？？？？',
    id: '3edZiie4RXs',
  },
  {
    date: '2023/11/30',
    title: '【検証】コーヒーを淹れる時に蒸らした方が良いって本当？？？？？',
    id: 'JGyG8nsHD5k',
  },
  {
    date: '2023/12/14',
    title: '【検証】料理酒って結局のところ意味あるの？？？？',
    id: 'hz6PdWze0Ro',
  },
  {
    date: '2024/03/21',
    title:
      '【検証】茹でたパスタとレンチンしたパスタって味に違いあるの？？？？？',
    id: 'FPe6o6gTQFQ',
  },
  {
    date: '2024/05/05',
    title:
      '【検証】"本みりん" と "みりん風"って食べて違いが分かるものなの？？？',
    id: '8HRUIzzipmc',
  },
  {
    date: '2024/05/30',
    title:
      '【検証】"エクストラバージンオリーブオイル"と"オリーブオイル"の違いは分かるの？',
    id: 'MWdr7Smr0pc',
  },
  {
    date: '2024/06/10',
    title: '【検証】キノコは洗うと味が変わる？ 本当か確かめよう！！！！！',
    id: 'vPChrowx4ps',
  },
  {
    date: '2024/06/20',
    title: '揚げ物をする油、新しい油と古い油って味変わるの！？ 検証します！',
    id: 'BTegy4yrYJY',
  },
  {
    date: '2024/06/27',
    title: '【検証】「塩と胡椒」と「味付 塩こしょう」って違いが分かるの？？？',
    id: '6zlC7up5lqw',
  },
  {
    date: '2024/07/04',
    title: '【検証】お米を炊いた後の『蒸らし』って意味あるの？？？？',
    id: 'd4wHQuw8XzM',
  },
] as const;

export const abTestData: {
  videoId: string;
  startTime: number;
  theme: string;
  recipe: string;
  correctAnswer: 'A' | 'B';
  memberResponses: { [key: string]: AnswerStatus };
}[] = [
  {
    videoId: 'eDrHz8cfEnw',
    startTime: 77,
    theme: 'パスタの塩',
    recipe: 'ペペロンチーノ',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'eDrHz8cfEnw',
    startTime: 339,
    theme: 'ローリエ',
    recipe: 'コンソメスープ',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'eDrHz8cfEnw',
    startTime: 601,
    theme: 'レバーに牛乳',
    recipe: 'レバー',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'eDrHz8cfEnw',
    startTime: 909,
    theme: '煮干しのはらわた',
    recipe: '煮干し出汁の味噌汁',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'rYuaIBJJQME',
    startTime: 99,
    theme: 'きゅうりのクリクリ',
    recipe: 'きゅうり',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'CORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'rYuaIBJJQME',
    startTime: 422,
    theme: 'ナツメグ',
    recipe: 'ハンバーグ',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'rYuaIBJJQME',
    startTime: 712,
    theme: 'エビの背わた処理+臭み取り',
    recipe: 'エビの天ぷら',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'rYuaIBJJQME',
    startTime: 712,
    theme: 'エビの背わた処理',
    recipe: 'エビの天ぷら',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'rYuaIBJJQME',
    startTime: 1113,
    theme: '味の素',
    recipe: 'チャーハン',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: '3edZiie4RXs',
    startTime: 76,
    theme: '砂糖 上白糖 or 三温糖',
    recipe: '鳥の照り焼き',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: '3edZiie4RXs',
    startTime: 337,
    theme: '調味料 混ぜる or 混ぜない',
    recipe: '回鍋肉',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'INCORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: '3edZiie4RXs',
    startTime: 633,
    theme: 'にんにく 生 or チューブ',
    recipe: 'ガーリックライス',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: '3edZiie4RXs',
    startTime: 840,
    theme: 'みかん 揉む or 揉まない',
    recipe: 'みかん',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'INCORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'JGyG8nsHD5k',
    startTime: 43,
    theme: 'ネギの頭 入れる or 入れない',
    recipe: '豚の角煮',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'JGyG8nsHD5k',
    startTime: 364,
    theme: 'コーヒー むらす or むらさない',
    recipe: 'コーヒー',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'JGyG8nsHD5k',
    startTime: 666,
    theme: 'チョコのテンパリング する or しない',
    recipe: 'チョコレート',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'JGyG8nsHD5k',
    startTime: 995,
    theme: 'カップラーメンのタレ おゆより 先に入れる or 後に入れる',
    recipe: 'カップ麺',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'hz6PdWze0Ro',
    startTime: 40,
    theme: '料理酒 入れる or 入れない',
    recipe: '野菜炒め',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'INCORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'hz6PdWze0Ro',
    startTime: 370,
    theme: 'ごぼうのささがけ 水に さらす or さらさない',
    recipe: 'キンピラごぼう',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'hz6PdWze0Ro',
    startTime: 745,
    theme: 'ミルクティー ミルクを 先入れ or 後入れ',
    recipe: 'ミルクティー',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'CORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'FPe6o6gTQFQ',
    startTime: 76,
    theme: 'パスタの茹で方',
    recipe: '素パスタ',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'INCORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'FPe6o6gTQFQ',
    startTime: 338,
    theme: 'ほうれん草',
    recipe: 'ほうれん草のバター炒め',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'INCORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'FPe6o6gTQFQ',
    startTime: 751,
    theme: 'ステーキを焼く油',
    recipe: 'ステーキ',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'INCORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: '8HRUIzzipmc',
    startTime: 62,
    theme: '本みりん or みりん風調味料',
    recipe: 'ブリの照り焼き',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'CORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: '8HRUIzzipmc',
    startTime: 518,
    theme: 'レモン or レモン汁',
    recipe: '牛タン',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'INCORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: 'MWdr7Smr0pc',
    startTime: 44,
    theme: 'エクストラバージンオリーブオイル',
    recipe: 'サラダ',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'ABSENT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'vPChrowx4ps',
    startTime: 61,
    theme: 'きのこ 洗う or 洗わない',
    recipe: 'きのこのソテー',
    correctAnswer: 'A',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'INCORRECT',
      amanattif: 'INCORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'BTegy4yrYJY',
    startTime: 50,
    theme: '新品の油 or 古い油',
    recipe: 'コロッケ',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'CORRECT',
      mansooon: 'CORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
  {
    videoId: '6zlC7up5lqw',
    startTime: 34,
    theme: '塩こしょう or 塩とコショー',
    recipe: '豚バラ肉',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'INCORRECT',
      mansooon: 'INCORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'INCORRECT',
    },
  },
  {
    videoId: 'd4wHQuw8XzM',
    startTime: 30,
    theme: 'お米 蒸らす or 蒸らさない',
    recipe: 'お米',
    correctAnswer: 'B',
    memberResponses: {
      comi_kamado: 'ABSENT',
      mansooon: 'INCORRECT',
      amanattif: 'CORRECT',
      no_inngurissyu: 'CORRECT',
    },
  },
] as const;
