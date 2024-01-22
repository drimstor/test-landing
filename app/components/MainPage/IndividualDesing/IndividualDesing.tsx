"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import indivDis from "@/public/indivDis.png";
import indivDisMobile from "@/public/indivDisMobile.png";
import Image from "next/image";
import clsx from "clsx";
import { images } from "./constants";

import styles from "./IndividualDesing.module.scss";
import Button from "@/components/UI-kit/Buttons/Button";

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className={clsx(styles.arrow, styles.prevArrow)} onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        fillRule="evenodd"
        d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
        fill="#2979FF"
      />
    </svg>
  </div>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className={styles.arrow} onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        fillRule="evenodd"
        d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
        fill="#2979FF"
      />
    </svg>
  </div>
);

function IndividualDesing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenWidth = typeof window !== "undefined" ? window?.innerWidth : 1200;
  const imageWidth = 172;
  const gapBetweenImages = 12;

  const calculateSlidesToShow = () => {
    return (
      Math.floor(
        (screenWidth - (images.length - 1) * gapBetweenImages) / imageWidth
      ) + (screenWidth < 1400 ? 0.5 : 0)
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className={styles.box}>
      <h2>Индивидуальный дизайн</h2>
      <p>
        Мы предоставляем возможность создать собственный уникальный дизайн для
        вашего валютного обменника, который позволит выделяться на фоне
        остального рынка и будет подчеркивает вашу индивидуальность.
      </p>

      <div className="carousel-container design-carousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              } ${
                index >= currentSlide - 2 && index <= currentSlide - 1
                  ? "left-active"
                  : ""
              } ${
                index >= currentSlide + 1 && index <= currentSlide + 2
                  ? "right-active"
                  : ""
              }`}
            >
              <Image src={image} alt={`Slide ${index + 1}`} priority />
            </div>
          ))}
        </Slider>
      </div>

      <div className={clsx("wrapper", styles.imgWrapper)}>
        <Image src={indivDis} alt={"indivDis"} />
      </div>

      <div className={styles.mobileImgWrapper}>
        <Image src={indivDisMobile} alt={"indivDisMobile"} width={172} />
      </div>

      <Button size="medium" variant="contained">
        Выбрать этот дизайн
      </Button>
    </div>
  );
}

export default IndividualDesing;
