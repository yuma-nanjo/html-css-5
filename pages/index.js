import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }
  return (
    <>
      <Head>
        <title>CASUAL</title>
      </Head>
      <div className="pageGrid">
        <main>
          <div className="hero partsGrid">
            <h1 className="en">CASUAL</h1>
            <p className="en">Outdoor Camping since 2001</p>
            <figure>
              <img src="/img/tent.jpg" alt="" />
            </figure>
          </div>

          <div className="msg msgBlack partsGrid">
            <figure>
              <img src="/img/tent-green.jpg" alt="" />
            </figure>
            <div className="text">
              <h2>冒険をはじめる</h2>
              <p className="text-subtitle en">Let&#39;s Start the Adventure</p>
              <p className="text-body">
                冒険には準備が必要です。全部おまかせで行くもよし、道具を自分で揃えて楽しむのもよし、最小限の装備で世界各地のサイトを巡ってみるのも捨てがたい…
                などなど、好みのスタイルで楽しめるのもポイントです。
              </p>
              <p className="text-link">
                <Link href="/content">
                  <a>詳しく見る ＞＞＞</a>
                </Link>
              </p>
            </div>
          </div>

          <div className="msg msgWhite partsGrid">
            <figure>
              <img src="/img/fire.jpg" alt="" />
            </figure>
            <div className="text">
              <h2>カジュアルに体験する</h2>
              <p className="text-subtitle en">Casual Outdoor Experience</p>
              <p className="text-body">
                近年はアウトドアを楽しむために必要なものが全部用意されたサイトやフィールドも増えています。わからないことは優しいガイドさんが教えてくれますので、アレもコレもカジュアルに体験できるのです。
              </p>
              <p className="text-link">
                <Link href="/content">
                  <a>詳しく見る ＞＞＞</a>
                </Link>
              </p>
            </div>
          </div>
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
