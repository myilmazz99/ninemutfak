import Link from "next/link";
import { useRef, useEffect } from "react";
import styleNavOnScrollEvent from "../tools/styleNavOnScrollEvent";

const Nav = () => {
  let list = useRef(null);
  let navExpandBtn = useRef(null);
  let nav = useRef(null);

  useEffect(() => {
    styleNavOnScrollEvent(nav.current, list.current);
  }, []);

  const toggleNavExpansion = () => {
    list.current.classList.toggle("expand");
    let childs = navExpandBtn.current.childNodes;
    childs[0].classList.toggle("hide");
    childs[1].classList.toggle("active");
    childs[2].classList.toggle("active");
  };

  return (
    <nav ref={nav}>
      <section className="nav-container">
        <figure>
          <img
            src="https://ik.imagekit.io/i6jr6aixj7/ninemutfak/logo__2__0hPs8XYAwUl.png"
            alt="nine mutfak logo"
          />
        </figure>
        <div
          ref={navExpandBtn}
          id="nav-expand-btn"
          onClick={toggleNavExpansion}
        >
          <small>MENÜ</small>
          <div className="first-line"></div>
          <div className="second-line"></div>
        </div>
        <ul ref={list} onClick={toggleNavExpansion}>
          <li>
            <Link href="/">
              <a>Ana sayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>Hakkımızda</a>
            </Link>
          </li>
          <li>
            <Link href="/#species">
              <a>Çeşitlerimiz</a>
            </Link>
          </li>
          <li>
            <Link href="/#footer">
              <a>İletişim</a>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
