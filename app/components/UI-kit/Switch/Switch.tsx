"use client";

import React, { useEffect, useState } from "react";
import styles from "./Switch.module.scss";

const Switch = ({ isActive, index }: { isActive: boolean; index: number }) => {
  return (
    <label className={styles["switch-container"]}>
      <input
        type="checkbox"
        checked={index === 0 ? true : isActive}
        className={styles["switch-input"]}
        disabled={index === 0}
      />
      <div
        className={`${styles["switch-slider"]} ${
          (index === 0 ? true : isActive) ? styles["checked"] : ""
        }`}
      >
        <div
          className={styles["switch-circle"]}
          style={{
            transform: (index === 0 ? true : isActive)
              ? "translate(18px, -50%)"
              : "translate(2px, -50%)",
          }}
        />
      </div>
    </label>
  );
};

export default Switch;
