"use client";

import Button from "@/components/UI-kit/Buttons/Button";
import styles from "./Constructor.module.scss";
import Switch from "@/components/UI-kit/Switch/Switch";
import { useState } from "react";
import clsx from "clsx";

function Constructor() {
  const [sumResult, setSumResult] = useState(38);

  const items = [
    {
      title: "Стартовая настройка",
      price: "Бесплатно",
      value: 0,
    },
    {
      title: "Маркетпелейс дизайнов или заказ своего дизайна",
      price: "2,000 RUB/мес",
      value: 2,
    },
    {
      title: "Telegram бот (функциональность обменника)",
      price: "2,000 RUB/мес",
      value: 2,
    },
    {
      title: "Android / iOS приложение для админ-панели",
      price: "2,000 RUB/мес",
      value: 2,
    },
    {
      title: "Cвой мерчант (функциональность для обработки трафика)",
      price: "2,000 RUB/мес",
      value: 2,
    },
  ];

  const changeSumResultHandler = (index: number) => (isActive: boolean) => {
    setSumResult((prev) =>
      isActive ? prev - items[index].value : prev + items[index].value
    );
  };

  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        <h2>Конструктор обменника</h2>
        <div className={styles.contentBox}>
          <div className={styles.whiteBox}>
            <div className={styles.whiteBoxItem}>
              <div className={styles.iconBox}>
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
                    d="M1 12C1 5.92472 5.92472 1 12 1C18.0753 1 23 5.92472 23 12C23 18.0753 18.0753 23 12 23C5.92472 23 1 18.0753 1 12ZM12 3C7.02928 3 3 7.02928 3 12C3 16.9707 7.02928 21 12 21C16.9707 21 21 16.9707 21 12C21 7.02928 16.9707 3 12 3Z"
                    fill="#2979FF"
                  />
                  <path
                    fill-rule="evenodd"
                    fillRule="evenodd"
                    d="M16.169 8.75671C16.5795 9.12617 16.6128 9.75846 16.2433 10.169L11.7433 15.169C11.5653 15.3668 11.3158 15.4854 11.05 15.4988C10.7843 15.5121 10.5242 15.4189 10.3273 15.2399L7.82729 12.9669C7.41865 12.5954 7.38858 11.9629 7.76011 11.5543C8.13164 11.1457 8.76409 11.1156 9.17272 11.4871L10.9291 13.084L14.7567 8.83104C15.1262 8.42053 15.7585 8.38726 16.169 8.75671Z"
                    fill="#2979FF"
                  />
                </svg>
                <b>Покупка обменника</b>
              </div>
              <span>30,000 RUB/мес</span>
            </div>
            {items.map((item, index) => (
              <div key={index} className={styles.whiteBoxItem}>
                <div className={styles.switchBox}>
                  <Switch onChange={changeSumResultHandler(index)} />
                  {item.title}
                </div>
                <div className={styles.price}>{item.price}</div>
              </div>
            ))}
          </div>
          <div className={styles.blueBox}>
            <div className={styles.textBox}>
              <span>Итоговая стоимость обменника</span>
              <h4>
                {sumResult},000 RUB/<span>мес</span>
              </h4>
            </div>
            <Button size="medium" variant="white">
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Constructor;
