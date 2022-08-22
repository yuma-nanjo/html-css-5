import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Content() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }
  return (
    <>
      <Head>
        <title>ご案内 | CASUAL</title>
      </Head>
      <div className="pageGrid">
        <main>
          <div className="headimg partsGrid">
            <div className="site en">CASUAL</div>
            <figure>
              <img src="/img/tent-orange.jpg" alt="" />
            </figure>
          </div>

          <article className="post partsGrid">
            <h1>ご案内</h1>
            <p>
              2001年にオンライン専門のキャンプサイトとしてオープンして依頼、CASUALは独自の情報発信を行うアウトドア系メディアおよびポータルとしてご好評をいただいております。本サイトを通してアウトドアをより身近に感じていただければ幸いです。
            </p>
            <p>
              数年前にはマイナーだったキャンプも、キャンプをテーマとしたYouTubeの動画配信やコミックの人気もあり、とても身近なものになっています。
            </p>

            <div className="gallery">
              <figure className="photoA">
                <img src="/img/camp-food.jpg" alt="" />
              </figure>
              <figure className="photoB">
                <img src="/img/camp-sky.jpg" alt="" />
              </figure>
              <figure className="photoC">
                <img src="/img/camp-fire.jpg" alt="" />
              </figure>
              <figure className="photoD">
                <img src="/img/camp-table.jpg" alt="" />
              </figure>
            </div>

            <p>
              大勢で楽しむキャンプはもちろんのこと、ひとりで楽しむソロキャンプも人気です。気軽に行けるキャンプサイトや、手軽でかさばらない道具類、簡単に設営できるテントなど、アウトドアをサポートするもろもろが進化しているのも大きいと言えるでしょう。
            </p>
            <p>
              すべてを賄ってくれる「グランピング」という選択肢もあります。自分で食材を用意せず、出来合いのお惣菜やお弁当を持ち込んで自然を満喫するのも一興です。いろいろな楽しみ方、自分に合ったスタイルを見つけてみてください。
            </p>
          </article>
        </main>

        <button className="nav-button" onClick={navFunc}>
          <span className="sr-only">MENU</span>
        </button>

        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>ホーム</a>
              </Link>
            </li>
            <li>
              <Link href="/content">
                <a>会社概要</a>
              </Link>
            </li>
            <li>
              <Link href="/content">
                <a>お問い合わせ</a>
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="sns">
          <li>
            <Link href="/">
              <a>
                <img src="/img/logo-twitter.svg" alt="Twitter" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <img src="/img/logo-facebook.svg" alt="Facebook" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <img src="/img/logo-instagram.svg" alt="Instagram" />
              </a>
            </Link>
          </li>
        </ul>

        <div className="decor en">Enjoy Active Outdoor Camping</div>

        <footer className="footer partsGrid">
          <div className="text">
            <div className="site en">CASUAL</div>
            <div className="address">
              〒901-3125
              <br />
              沖縄県島尻郡久米島町字鳥島グスク
              <br />
              0997-1234-5678
            </div>
          </div>
          <div className="chat en">
            <Link href="/">
              <a>
                <img src="/img/chat.svg" alt="" />
                <br />
                Chat Support
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
