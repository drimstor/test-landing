import clsx from "clsx";
import styles from "./WhatIs.module.scss";
import Image from "next/image";
import img from "@/public/whatIs.png";

function WhatIs() {
  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        <div className={styles.textContentBox}>
          <h2>Что такое Extructor?</h2>
          <p>
            Воспользовавшись сервисом Extructor вы получите технологичный,
            безопасный, быстрый и удобный онлайн обменник, с широким выбором
            готовых решений для любых ваших потребностей.
          </p>
          <p>
            Extructor позволяет предпринимателям создавать собственные платформы
            для обмена валют с минимальными затратами на разработку и
            техническое обслуживание, что делает данный бизнес доступным
            каждому.
          </p>
          <p>
            Вам как владельцу бизнеса потребуется наладить только операционную
            деятельность, а все технические потребности и задачи мы уже решили
            за вас.
          </p>
        </div>
        <div className={styles.imageContentBox}>
          <Image src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default WhatIs;
