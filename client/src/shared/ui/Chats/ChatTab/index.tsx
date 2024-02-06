import React from "react";

import styles from "./styles.module.scss";

interface ChatTabProps {
  title: string;
  message: string;
  time: string;
}

export const ChatTab: React.FC<ChatTabProps> = ({ title, message, time }) => {
  return (
    <div className={styles.chat_tab}>
      <div className={styles.chat_tab__upper}>
        <span className={styles.chat_tab__upper__title}>{title}</span>
        <span className={styles.chat_tab__upper__time}>{time}</span>
      </div>
      <span className={styles.chat_tab__message}>{message}</span>
    </div>
  );
};
