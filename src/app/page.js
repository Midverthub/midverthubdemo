import Image from "next/image";
import { Inter, Protest_Guerrilla } from "next/font/google";




const protestGuerrilla = Protest_Guerrilla({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
// import "./page.module.css";

export default function Home() {
  return (
    <div className="contianer">

      <div class="marquee">
        <ul class="marquee__content">
          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>
        </ul>
      </div>

      <main className="">

        <Image
          className={"hero"}
          src="/assets/midvertWhiteLogo.png"
          alt="Next.js logo"
          width={150}
          height={50}
          priority
        />


        <div className="heroHeader">
          <h1>COMING</h1>
          <h1>SOON</h1>
        </div>


        {/* <h3 className=""> WWW.MIDVERT.COM</h3> */}


        <a className={`${protestGuerrilla.className}, link `} href="https://www.instagram.com/midvert.hub?igsh=dWFyem5wb3l5N3N1&utm_source=qr">
          <Image
            className={"icon"}
            src="/assets/instagram-brands-solid.svg"
            alt="Next.js logo"
            width={16}
            height={16}
            priority
          />
          Instagram
        </a>

      </main>

      <div class="marquee">
        <ul class="marquee__content">
          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>

          <li>COMING</li>
          <li>SOON</li>
          <li>✦</li>
        </ul>

      </div>

    </div>
  );
}
