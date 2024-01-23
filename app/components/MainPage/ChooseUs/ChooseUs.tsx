"use client";

import styles from "./ChooseUs.module.scss";
import clsx from "clsx";
import { content, frames } from "./constants";
import { useState } from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ChooseUs() {
  const [slideIndex, setSlideIndex] = useState(0);
  const isTabletScreen = useMediaQuery("(max-width: 767px)");

  const settings = {
    centerMode: false,
    infinite: false,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        <div className={clsx(styles.bgCircle, styles.bgBlue)} />
        <div className={styles.bgCircle} />
        <h2>Почему стоит выбрать нас?</h2>
        <div className={styles.contentBox}>
          <ul className={styles.listButtons}>
            {isTabletScreen ? (
              <Slider {...settings}>
                {content.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSlideIndex(index)}
                    className={clsx(index === slideIndex && styles.active)}
                  >
                    {item.icon} {item.text}
                  </li>
                ))}
              </Slider>
            ) : (
              content.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSlideIndex(index)}
                  className={clsx(index === slideIndex && styles.active)}
                >
                  {item.icon} {item.text}
                </li>
              ))
            )}
          </ul>
          <div className={styles.content}>
            <p>{frames[slideIndex].text}</p>
            {frames.map((item, index) => (
              <Image
                src={item.img}
                className={clsx(index === slideIndex && styles.isShow)}
                key={index}
                priority
                alt="img"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
