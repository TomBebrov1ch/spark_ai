import React from "react";

import styles from "./styles.module.scss";

interface MessageProps {
  message: string;
  time: string;
}

export const MessageBubble = () => {
  return (
    <div className={styles.message_container}>
      <div className={styles.message_container__user} />
      <span className={styles.message_container__upper}>
        <span className="font-bold text-black text-base">You</span>{" "}
        <span className="ml-2">24 Sep ▪ 11:30 PM</span>
      </span>
      <div className={styles.message_container__bubble}>
        Generate me super beautiful UI with space design
      </div>
    </div>
  );
};
