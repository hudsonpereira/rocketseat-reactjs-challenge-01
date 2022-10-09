import logo from "../assets/logo.svg";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <img src={logo} />
    </header>
  );
}

export default Header;
