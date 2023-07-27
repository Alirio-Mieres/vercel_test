import "./Nav.css";
import Image from "next/image";
const Nav = () => {
  return (
    <nav>
        <h3>Edie</h3>
        <div>
          <Image src="./menu_icon.svg" alt="Menu" width={35} height={35} />
        </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Our Works</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
