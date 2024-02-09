import React from "react";

import styles from "./styles.module.scss";
import { Header } from "@entities/Header/ui";
import { TextField } from "@features/TextField/ui";
import { MessageBubble } from "@shared/ui/MessageBubble";

export const ChatWindow = () => {
  return (
    <div className={styles.chat_window}>
      <Header />
      <div className={styles.chat_window__chat}>
        <MessageBubble />
        <TextField />
      </div>
    </div>
  );
};
