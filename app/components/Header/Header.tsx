"use client";

import styles from "./Header.module.scss";

import Image from "next/image";
import Logo from "@/public/Logo.svg";
import clsx from "clsx";
import Link from "next/link";
import Button from "../UI-kit/Buttons/Button";
import { navLinks } from "./constants";
import { useState } from "react";

function Header() {
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx("wrapper", styles.contentBox)}>
        <Image src={Logo} alt="logo" />
        <nav className={clsx(styles.nav, isShowBurgerMenu && styles.show)}>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              {link.name}
            </Link>
          ))}
          <Button size="medium" variant="contained">
            Войти
          </Button>
        </nav>
        <Button size="medium" variant="contained">
          Войти
        </Button>
        <div
          className={styles.burgerBox}
          onClick={() => setIsShowBurgerMenu(!isShowBurgerMenu)}
        >
          <div
            className={clsx(
              styles.burgerButton,
              isShowBurgerMenu && styles.active
            )}
          >
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
