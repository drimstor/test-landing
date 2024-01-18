import styles from "./SubTitle.module.scss";

import clsx from "clsx";
import { content } from "./constants";

function SubTitle() {
  return (
    <div className={styles.box}>
      <div className={clsx("wrapper", styles.wrapper)}>
        {content.map((item, index) => (
          <div key={index} className={styles.item}>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubTitle;
