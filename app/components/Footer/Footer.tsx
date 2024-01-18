import Image from "next/image";
import styles from "./Footer.module.scss";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
import clsx from "clsx";

function Footer() {
  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        <Image src={Logo} alt="logo" />
        <div className={styles.textBox}>
          <div className={styles.linksBox}>
            <Link href="#">Политика конфиденциальности</Link>
            <span>·</span>
            <Link href="#">AML/KYC политика</Link>
            <span>·</span>
            <Link href="#">FAQ</Link>
          </div>
          <span>Все права защищены © 2021-2024</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
