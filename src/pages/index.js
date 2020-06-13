import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="zaru" keywords={[`zaru`]} />
    <h1>zaru</h1>
    <ul>
      <li><a href="https://twitter.com/zaru">Twitter</a></li>
    </ul>
    <h2>書いたものとか、作ったもの</h2>
    <ul>
      <li>
        <a href="https://github.com/zaru">GitHub repositories</a>
        <ul>
          <li><a href="https://github.com/zaru/webpush">webpush ( Ruby gem )</a> WebPush API で送信ができる gem</li>
          <li><a href="https://github.com/zaru/recurl">recurl ( Ruby gem )</a> Rails, Sinatra Web アプリへのリクエストを curl コマンドでログ保存する gem</li>
          <li><a href="https://github.com/zaru/LightningQR">LightningQR ( mac app )</a> コピーした URL を即座に QR コードに変換する常駐型 mac アプリ</li>
          <li><a href="https://github.com/zaru/notify_hub">NotifyHub ( mac app )</a> GitHub の通知センターを表示する常駐型 mac アプリ</li>
          <li><a href="https://github.com/zaru/vue.tategaki">Vue tategaki ( vue component )</a> 縦書きで contenteditable 可能な Vue コンポーネント</li>
          <li><a href="https://github.com/zaru/menuffy">menuffy ( mac app )</a> アプリのメニューをマウスカーソルの近くに表示させる mac アプリ
            <ul><li><a href="https://zaru.github.com/menuffy">menuffy website</a></li></ul>
          </li>
          <li><a href="https://github.com/zaru/mewcam">mewcam ( mac app )</a> カメラの画像をデスクトップの最前面に表示し、背景を透過する mac アプリ</li>
        </ul>
      </li>
      <li>
        WebSites
        <ul>
          <li><a href="https://penpenpen.zaru.dev/">penpenpen</a> トラックパッドでお絵かきしやすいブラウザアプリ</li>
          <li><a href="https://pixelated-video.zaru.dev/">pixelated video</a> カメラの画像をリアルタイムにドット絵風に変換するブラウザアプリ</li>
          <li><a href="https://lightning-qr.zaru.dev/">Lightning QR reader for Web</a> QR コードを連続で読み取れるブラウザアプリ</li>
          <li><a href="https://convert-web-simulator.firebaseapp.com/">convert option simulator</a> ImageMagick の convert コマンドが覚えられない人のためのツール</li>
        </ul>
      </li>
      <li><a href="https://qiita.com/zaru">Qiita</a></li>
      <li><a href="https://tech.basicinc.jp/accounts/zaru">Basic engineer blog</a></li>
      <li><a href="https://medium.com/@zaru">Medium</a></li>
      <li><a href="https://speakerdeck.com/zaru_sakuraba">SpeakerDeck</a></li>
      <li><a href="https://www.slideshare.net/zaruhiroyukisakuraba/presentations">SlideShare</a></li>
      <li><a href="https://www.wantedly.com/users/384807">Wantedly</a></li>
    </ul>
  </Layout>
)

export default IndexPage
