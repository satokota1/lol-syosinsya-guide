// components/LessonDetails.tsx

import React from 'react';
import Image from 'next/image';

const lessonsDetailsContent: { [key: number]: JSX.Element } = {
    1: (
        <>
          <h3 className="text-xl font-bold">用語集</h3>
          <p className="mt-2">
            <a 
              href="https://www.esports.net/jp/guides/lol-terms-explained/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              こちらを参照（外部サイト）
            </a>
          </p>
        </>
      ),
  2: (
    <>
      <h1>ホットキー</h1>
      <ul>
        <li>左クリックアタックムーブをON</li>
        <li>
          <Image src="/hidari.png" alt="左クリックアタックムーブ" width={300} height={200} style={{ margin: '3px 0' }} />
        </li>
        <li>左クリックをクリックするだけでアタックムーブが出来るようになります。</li>
        <li>通常の左クリックで行いたい操作をしたい場合は Shiftキーを押しながら左クリックをしないといけないので少し面倒な部分もあるが、圧倒的に有利設定なのでオン推奨。</li>
      </ul>

      <h1>インターフェース</h1>
      <ul>
        <li>この辺は画像通りにしておけば問題ない、スペルコストを表示は絶対にオン</li>
        <li>
          <Image src="/inta1.png" alt="インターフェース設定" width={300} height={200} style={{ margin: '3px 0' }} />
        </li>
      </ul>

      <h1>ゲーム</h1>
      <ul>
        <li>カメラロックモードは陣営別オフセットがおすすめ。敵陣側が少し広く見えるようになります。</li>
        <li>カーソル付近のターゲットを優先攻撃は絶対ON、ミスクリックで歩いて行っちゃう問題等が解決します。</li>
        <li>オートアタックもオン推奨。相手のワードチェックができる小技があったり、操作が楽になります。Sキーを押せばオフにしている時と同じ状態になるので、殴りたくない時はSを押しましょう。</li>
        <li>
          <Image src="/gameplay.png" alt="ゲーム設定" width={300} height={200} style={{ margin: '3px 0' }} />
        </li>
      </ul>
    </>
  ),
  15: (
    <>
      <h2>三角形と平行線理論</h2>
      <p>CoreJJの伝説の動画です。BOTレーンでこれを知らないのは犯罪レベル！！</p>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v-ec5astbE0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  ),
};

type LessonDetailsProps = {
  lessonId: number;
};

const LessonDetails = ({ lessonId }: LessonDetailsProps) => {
  return (
    <div>
      {lessonsDetailsContent[lessonId] || <p>詳細が見つかりません。</p>}
    </div>
  );
};

export default LessonDetails;
