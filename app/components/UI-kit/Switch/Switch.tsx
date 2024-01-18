"use client";

import React, { useState } from "react";
import styles from "./Switch.module.scss";

const Switch = ({ onChange }: { onChange: (isActive: boolean) => void }) => {
  const [isChecked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!isChecked);
    onChange(isChecked);
  };

  return (
    <label className={styles["switch-container"]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles["switch-input"]}
      />
      <div
        className={`${styles["switch-slider"]} ${
          isChecked ? styles["checked"] : ""
        }`}
      >
        <div
          className={styles["switch-circle"]}
          style={{
            transform: isChecked
              ? "translate(18px, -50%)"
              : "translate(2px, -50%)",
          }}
        />
      </div>
    </label>
  );
};

export default Switch;
