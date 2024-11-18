export const lessons = [
    {
        id: 1,
        title: "基本用語",
        description: "LoLにおける基本的な用語を学びます。",
      },
      {
        id: 2,
        title: "オススメ設定",
        description: "ホットキー、インターフェース、ゲーム設定に関するオススメ設定の詳細。",
      },
      
    {
      id: 3,    
      title: "勝利条件",
      description: "LoLの勝利条件について理解を深めます。",
    },
    {
      id: 4,
      title: "各ロールの役割 基礎編",
      description: "各ロールの基本的な役割を学びます。",
    },
    {
      id: 5,
      title: "各ロールの役割 応用編",
      description: "各ロールの応用的な役割について学びます。",
    },
    {
      id: 6,
      title: "サモナーズリフトの地形",
      description: "マップ上の重要な地形について理解を深めます。",
    },
    {
      id: 7,
      title: "ブルーサイドとレッドサイドの違い",
      description: "両サイドの違いとその影響を学びます。",
    },
    {
      id: 8,
      title: "オブジェクト",
      description: "ゲームにおけるオブジェクトの重要性を理解します。",
    },
    {
      id: 9,
      title: "JGモンスター",
      description: "ジャングルモンスターとその倒し方を学びます。",
    },
    {
      id: 10,
      title: "JGの狩り方",
      description: "効率的にジャングルを狩る方法を学びます。",
    },
    {
      id: 11,
      title: "ミニオンについて",
      description: "ミニオンの重要性とその扱い方を学びます。",
    },
    {
      id: 12,
      title: "CSの取り方",
      description: "ミニオンのラストヒットを取るためのテクニックを学びます。",
    },
    {
      id: 13,
      title: "サモナースペルとルーン",
      description: "サモナースペルとルーンの選択について学びます。",
    },
    {
      id: 14,
      title: "スキルショットの避け方と当て方、スペーシング",
      description: "スキルショットを避けたり当てたりするためのコツを学びます。",
    },
    {
        id: 15,
        title: "三角形と平行線理論",
        description: "CoreJJの伝説の動画です。BOTレーンでこれを知らないのは犯罪レベル！！日本語字幕つけれるのでつけてね",
        videoUrl: "https://www.youtube.com/watch?v=v-ec5astbE0",
      },
      
           
    {
      id: 16,
      title: "集団戦 前から？後ろから？ゆっくり？",
      description: "集団戦の基本的な戦い方を学びます。",
    },
    {
      id: 17,
      title: "チャンピオン情報の集め方",
      description: "チャンピオンの情報を効率よく集める方法を学びます。",
    },
    {
      id: 18,
      title: "チャンピオンプールの広げ方",
      description: "使えるチャンピオンを増やすための方法を学びます。",
    },
    {
      id: 19,
      title: "ビルド",
      description: "チャンピオンのビルドについて学びます。",
    },
    {
      id: 20,
      title: "敵ジャングルの位置予想",
      description: "敵ジャングラーの位置を予測する方法を学びます。",
    },
    {
      id: 21,
      title: "チャンプのジャンル別相性",
      description: "チャンピオンの相性について学びます。",
    },
    {
      id: 22,
      title: "基本的なローテーション",
      description: "ゲーム中のローテーションの基本を学びます。",
    },
    {
      id: 23,
      title: "ターンの概念と管理",
      description: "ターンの重要性と管理方法について学びます。",
    },
    {
      id: 24,
      title: "チーム構成とシナジー",
      description: "チーム構成の考え方とシナジーについて学びます。",
    },
    {
      id: 25,
      title: "マクロ的な戦略",
      description: "マクロ戦略について理解を深めます。",
    },
    {
      id: 26,
      title: "視界はなんのために取るのか",
      description: "視界の取り方とその重要性を学びます。",
    },
    {
      id: 27,
      title: "メタを知る方法",
      description: "現在のメタゲームを知る方法を学びます。",
    },
    {
      id: 28,
      title: "効率的な練習法",
      description: "効率的に上達するための練習法を学びます。",
    },
    {
      id: 29,
      title: "メンタルとマインドセット",
      description: "ゲームを続ける上でのメンタルとマインドセットを学びます。",
    },
    {
      id: 30,
      title: "コミュニケーションと意思疎通",
      description: "チームメンバーとのコミュニケーション方法を学びます。",
    },  
  ];
  
  /**
   * 指定されたコースに基づいてレッスンをフィルタリングする関数
   * @param courseType - 'nonbiri' または 'yaruki'
   * @returns フィルタリングされたレッスンの配列
   */
  export const getFilteredLessons = (courseType: 'nonbiri' | 'yaruki' | null) => {
    if (courseType === 'nonbiri') {
      return lessons.filter((lesson) => [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 19, 20, 22, 25, 27, 28, 30].includes(lesson.id));
    }
    return lessons;
  };
  