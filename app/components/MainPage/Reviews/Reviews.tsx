"use client";

import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Reviews.module.scss";
import { useState } from "react";
import { StarIcon, reviewsArray } from "./constants";

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + reviewsArray.length) % reviewsArray.length
    );
    setActiveIndex((prev) => prev.map((element) => --element));
  };

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % reviewsArray.length);
    setActiveIndex((prev) => prev.map((element) => ++element));
  };

  const [activeIndex, setActiveIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className={clsx(styles.arrow, styles.prevArrow)}
      onClick={() => {
        handlePrev();
        onClick && onClick();
      }}
    >
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
    <div
      className={styles.arrow}
      onClick={() => {
        handleNext();
        onClick && onClick();
      }}
    >
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

  const screenWidth = typeof window !== "undefined" ? window?.innerWidth : 1200;
  const imageWidth = 384;

  const calculateSlidesToShow = () => {
    if (screenWidth > 420) {
      return Math.floor((screenWidth - (reviewsArray.length - 1)) / imageWidth);
    } else {
      return 1;
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: calculateSlidesToShow(),
    arrows: true,
    variableWidth: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className={styles.box}>
      <div className={clsx(styles.bgCircle, styles.bgBlue)} />
      <div className={styles.bgCircle} />
      <div className="wrapper">
        <h2>Отзывы</h2>
        <div className={clsx("carousel-container", "reviews-carousel")}>
          <Slider {...settings}>
            {reviewsArray.map((review, index) => (
              <div key={index} className={clsx(styles.reviewBox)}>
                <h4>{review.name}</h4>
                <div className={styles.starBox}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span>{review.review}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
