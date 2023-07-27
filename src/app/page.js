import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../../components/Nav/Nav";
import hero from "../../public/heroImage.jpg";

export default function Home() {
  return (
    <main>
      <section id="firstSection">
        <Nav />
        <div id="firstSection_top">
          <div>
            <p id="unhappy">Unhappy with your website?</p>
            <p id="createP">We create beautiful and fast web services</p>
          </div>
          <div>
            <Image src={hero} alt="Hero" />
          </div>
        </div>
        <div id="firstSection_bottom">
          <p>Story, emotion and purpose</p>
          <p></p>

          <form htmlFor="email" id="firstSection_bottom_form">
            <label htmlFor="">Want us to contact you?</label>
            <div>
              <input type="text" placeholder="email" />
              <button>Join</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
