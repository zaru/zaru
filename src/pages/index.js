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
        <a href="https://github.com/zaru">GitHub</a>
        <ul>
          <li><a href="https://github.com/zaru/webpush">webpush ( Ruby gem )</a></li>
          <li><a href="https://github.com/zaru/recurl">recurl ( Ruby gem )</a></li>
          <li><a href="https://github.com/zaru/LightningQR">LightningQR ( mac app )</a></li>
          <li><a href="https://github.com/zaru/notify_hub">NotifyHub ( mac app )</a></li>
          <li><a href="https://github.com/zaru/vue.tategaki">Vue tategaki ( vue component )</a></li>
          <li><a href="https://github.com/zaru/menuffy">menuffy ( mac app )</a>
            <ul><li><a href="https://zaru.github.com/menuffy">menuffy website</a></li></ul>
          </li>
        </ul>
      </li>
      <li>
        Apps
        <ul>
          <li><a href="https://penpenpen.zaru.dev/">penpenpen</a></li>
          <li><a href="https://pixelated-video.zaru.dev/">pixelated video</a></li>
          <li><a href="https://lightning-qr.zaru.dev/">Lightning QR reader for Web</a></li>
        </ul>
      </li>
      <li><a href="https://qiita.com/zaru">Qiita</a></li>
      <li><a href="hhttps://tech.basicinc.jp/accounts/zaru">Basic engineer blog</a></li>
      <li><a href="https://medium.com/@zaru">Medium</a></li>
      <li><a href="https://speakerdeck.com/zaru_sakuraba">SpeakerDeck</a></li>
      <li><a href="https://www.slideshare.net/zaruhiroyukisakuraba/presentations">SlideShare</a></li>
      <li><a href="https://www.wantedly.com/users/384807">Wantedly</a></li>
    </ul>
  </Layout>
)

export default IndexPage
