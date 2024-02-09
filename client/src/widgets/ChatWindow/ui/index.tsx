import React from "react";

import styles from "./styles.module.scss";
import { Header } from "@entities/Header/ui";
import { TextField } from "@features/TextField/ui";

export const ChatWindow = () => {
  return (
    <div className={styles.chat_window}>
      <Header />
      <div className={styles.chat_window__chat}>
        <TextField />
      </div>
    </div>
  );
};
