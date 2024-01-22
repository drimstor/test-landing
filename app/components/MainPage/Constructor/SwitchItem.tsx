import React, { useState } from "react";
import Switch from "@/components/UI-kit/Switch/Switch";
import styles from "./Constructor.module.scss";

const WhiteBoxItem = ({
  item,
  index,
  changeSumResultHandler,
}: {
  item: any;
  index: number;
  changeSumResultHandler: (index: number, switchState: boolean) => void;
}) => {
  const [switchState, setSwitchState] = useState(true);

  const handleItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSwitchState(!switchState);
    changeSumResultHandler(index, !switchState);
  };

  return (
    <div className={styles.whiteBoxItem} onClick={handleItemClick}>
      <div className={styles.switchBox}>
        <Switch isActive={switchState} index={index} />
        {item.title}
      </div>
      <div className={styles.price}>{item.price}</div>
    </div>
  );
};

export default WhiteBoxItem;
