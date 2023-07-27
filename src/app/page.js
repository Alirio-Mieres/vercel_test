import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../../components/Nav/Nav";
import hero from "../../public/heroImage.jpg";
import Technology from "../../components/Technology/Technology";

export default function Home() {
  return (
    <main>
      <section id="firstSection">
        <Nav />
        <div id="firstSection_top">
          <div className="title">
            <p id="unhappy">Unhappy with your website?</p>
            <p id="createP">We create beautiful and fast web services</p>
          </div>
          <div id="hero-image">
            <Image src={hero} alt="Hero" />
          </div>
        </div>

        <div id="firstSection_bottom">
          <h3>Story, emotion and purpose</h3>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>

          <form htmlFor="email" id="firstSection_bottom_form">
            <label htmlFor="">Want us to contact you?</label>
            <div>
              <input type="text" placeholder="email" />
              <button>Join</button>
            </div>
          </form>
        </div>

        <Technology />
      </section>
    </main>
  );
}
