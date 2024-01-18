"use client";

import styles from "./ChooseUs.module.scss";
import clsx from "clsx";
import { content, frames } from "./constants";
import Image from "next/image";
import { useState } from "react";

function ChooseUs() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        <div className={clsx(styles.bgCircle, styles.bgBlue)} />
        <div className={styles.bgCircle} />
        <h2>Почему стоит выбрать нас?</h2>
        <div className={styles.contentBox}>
          <ul className={styles.listButtons}>
            {content.map((item, index) => (
              <li
                key={index}
                onClick={() => setSlideIndex(index)}
                className={clsx(index === slideIndex && styles.active)}
              >
                {item.icon} {item.text}
              </li>
            ))}
          </ul>
          <div className={styles.content}>
            <p>{frames[slideIndex].text}</p>
            <Image src={frames[slideIndex].img} placeholder="blur" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
