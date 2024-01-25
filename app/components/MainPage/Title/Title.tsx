"use client";

import clsx from "clsx";
import styles from "./Title.module.scss";
import Image from "next/image";
import imgLeft from "@/public/title-left.png";
import imgCenter from "@/public/title-center.png";
import imgRight from "@/public/title-right.png";
import Button from "@/components/UI-kit/Buttons/Button";
import useMediaQuery from "@/hooks/useMediaQuery";

function Title() {
  const isLargeScreen = useMediaQuery("(max-width: 1199px)");
  return (
    <div className={styles.box}>
      <div className={clsx(styles.bgCircle, styles.bgBlue)} />
      <div className={styles.bgCircle} />
      <div className={clsx("wrapper", styles.wrapper)}>
        <div className={styles.textContentBox}>
          <h1>Обменник для вас</h1>
          <p>
            Безопасный крипто обменник с уникальным дизайном и простым
            управлением
          </p>
          <div className={styles.buttonsBox}>
            <Button size="medium" variant="outlined">
              {!isLargeScreen ? "Посмотреть демо" : "Демо"}
            </Button>
            <Button size="medium" variant="contained">
              Купить
            </Button>
          </div>
        </div>
        <div className={styles.imagesBox}>
          <Image src={imgLeft} alt="img" />
          <Image src={imgCenter} alt="img" />
          <Image src={imgRight} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Title;
