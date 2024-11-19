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

          <p className="mt-2">
        LoLのことルールとか含めて本当に何も知りません！！って人はこの動画とかから見てみよう
      </p>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i4H7t2kJTIM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe></div>
        </>
      ),
  2: (
    <>  
      <h1>ホットキー</h1>
      <ul>
        <li>左クリックアタックムーブをON（ゲーム内の設定画面じゃないと無いので注意）</li>
        <li>
          <Image src="/hidari.png" alt="左クリックアタックムーブ" width={300} height={200} style={{ margin: '3px 0' }} />
        </li>
        <li>左クリックをクリックするだけでアタックムーブが出来るようになります。</li>
        <li>通常の左クリックで行いたい操作をしたい場合は Shiftキーを押しながら左クリックをしないといけないので少し面倒な部分もあるが、圧倒的に有利設定なのでオン推奨。</li>
        <li>アタックムーブとは、射程範囲内に敵がいるなら自動的に攻撃する、いないなら移動する。というもの。</li>
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
  3: (
    <>
      <h3 className="text-xl font-bold">LoLの勝利条件</h3>
      <p className="mt-2">
        「ネクサスを破壊する」 or 「相手にサレンダーさせる」
        <br />
        以上！！！！！！！！！！！！！
      </p>
      <p className="mt-2">
        キルを沢山とる、ゴールドを沢山稼ぐ、バロンを倒す。
        そういった行為は勝率をあげる行為であって、勝利条件ではない。
      </p>
      <p className="mt-2">
        当たり前の話だけどLoLをすればするほど忘れがちなので気を付けよう。
        0/5/2でレーン負けたとしても、ネクサスが破壊できるなら何一つ問題はない。
      </p>

    </>
  ),
  4: (
    <>
      <h3 className="text-xl font-bold">LoLでの役割分担と配置</h3>
      <p className="mt-2">
        LoLで経験値やお金を稼げる場所は
        TOPレーン、MIDレーン、BOTレーン、JUNGLEの4箇所。
        でも、チームは5人なのでどこかに2人送る必要がある。
      </p>
      <p className="mt-2">
        BOTレーンのタワーは他のレーンに比べて柔らかい。
        TOPとBOTレーンはMIDレーンと比べて長いため、自陣から中央にたどり着くまで時間がかかるし、
        レーンでも安全地帯のタワーまで下がるまでが遠い。
        JUNGLEはモンスターが沸き直すのに時間がかかるから、2人いると狩るモンスターが足りなくなる。
      </p>
      <p className="mt-2">
        そのため、タワーを折りやすいが少し危険なBOTレーンには2人で行く。
        TOPレーンには体が強かったり1vs1が得意なチャンピオンが行く。
        JUNGLEにはモンスターを狩るのが得意で、レーンへの奇襲が得意なチャンピオンが行く。
        MIDレーンにはミニオンを処理するのが早かったり、レベルを上げることが重要なチャンピオンが行く。
      </p>
    </>
  ),
  5: (
    <>
      <h3 className="text-xl font-bold">基本編より細かい話</h3>
      <p className="mt-2">
        サポートとして選ばれるチャンピオンは、レベルが低くても活躍できるという特徴を持つ。
        5人のチームでファームできる場所は4箇所しかないので、レベルが低い＝体力もダメージも低い。
        そんな中で活躍できるのは、基本的には味方を強化できるエンチャンター系サポートか、CCが優秀なタンク系サポートになる。
      </p>
      <p className="mt-2">
        BOTレーンにサポートと一緒に行くチャンピオンが基本的にADマークスマンであることには明確な理由がある。
        まずADC（アタックダメージキャリー）と呼ばれる通り、ADマークスマンはチームをキャリーする力がある。
        その理由は通常攻撃がメイン火力であるから。
      </p>
      <p className="mt-2">
        なぜ通常攻撃が強いかというと、スキルと違ってクールダウンが無いから。
        ブラインドなどの特殊状態を除けば、安定してダメージを出し続けることが出来る。
        しかし、それが可能なのは沢山装備を揃えてから。
      </p>
      <p className="mt-2">
        装備が揃うまでは通常攻撃よりもスキルの方が影響度が高い。
        スキルは装備を買わなくてもスキルレベルを上げることで強くなるし、
        序盤はほとんどのスキルが通常攻撃よりも高いダメージを与える。
        つまりADマークスマンはレベルよりもお金が重要なので、
        サポートと一緒にBOTに行き、経験値が減るのでレベルは上がらないが、
        タワーを削ることでお金を稼げるし、序盤の弱い時間帯でもサポートに守ってもらうことができる。
      </p>
      <p className="mt-2">
        メイジはその逆で、もちろん装備も重要だが、レベルを上げてスキルレベルを上げることによる恩恵が
        マークスマンと比べて大きい。
        ミッドレーンは短いので体が弱くてもファームが可能で、TOPBOT両方のレーンに顔を出しやすいので
        プッシュ力も重要である。
        なので基本的にはスキルが強力なメイジ系が行くことが多い。
      </p>
      <p className="mt-2">
        この基本的な考えを持ったうえで、チーム内のAPADのバランスや、対面との相性などを踏まえて
        特殊なチャンピオンが出てくる（ADMIDやAPBOT、マークスマンTOPなど）。
      </p>
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
