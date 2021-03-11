import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader(params) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next Eventos</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Todos Eventos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
