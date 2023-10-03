import React from "react";
import styles from "./Button.module.scss"

export default function Button({ ButtonClass, title, onClick }: Button) {
  return (
    <button onClick={onClick} className={`${styles.commonBtn} btn ${ButtonClass}`}>
      {title}
    </button>
  );
}
