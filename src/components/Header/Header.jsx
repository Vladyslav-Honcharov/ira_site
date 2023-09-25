import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const links = [
    { name: "Записатися", link: "Appointment" },
    { name: "Портфоліо", link: "Portfolio" },
    { name: "Ціни", link: "Price" },
    { name: "Відгуки", link: "Feedback" },
    { name: "Контакти", link: "Contact" },
  ];

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen((prevState) => !prevState);
  };

  const handleResize = () => {
    if (window.innerWidth > 700) {
      setIsBurgerMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${isBurgerMenuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="logo">
        <img src="your-logo-url.jpg" alt="logo" />
      </Link>
      <div className="burger-menu-icon" onClick={handleBurgerMenu}>
        <div className={`bar ${isBurgerMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isBurgerMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isBurgerMenuOpen ? "open" : ""}`}></div>
      </div>
      <div className="header__blur" onClick={handleBurgerMenu}></div>
      <div className={`header__links ${isBurgerMenuOpen ? "menu-open" : ""}`}>
        {links.map((link, index) => {
          return (
            <li className="header__link" key={index}>
              <NavLink
                className="header__link"
                onClick={handleBurgerMenu}
                to={`/${link.link}`}
                key={index}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </div>
      <div className="header__telephone">
        <a className="header__telephone" href="tel:+380971919424">
          +380971919424
        </a>
      </div>
    </header>
  );
}

export default Header;
