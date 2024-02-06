import React from "react";
import { ChatTab } from "@shared/ui/Chats/ChatTab";

import styles from "./styles.module.scss";
import { AddButton } from "@shared/ui/AddButton/index.client";

interface ChatsMenuProps {
  title: string;
}

export const ChatsMenu: React.FC<ChatsMenuProps> = ({ title }) => {
  return (
    <div className={styles.chats_menu}>
      <div className={styles.chats_menu__upper}>
        <span className={styles.chats_menu__upper__title}>{title}</span>
        <AddButton onClick={() => console.log("clicked")} />
      </div>
      <ChatTab
        title="Cosmic Evolution"
        time="12:50 PM"
        message="Some 15 billion years ago the universe emerged from a hot, dense sea of..."
      />
      <ChatTab
        title="Cosmic Evolution"
        time="12:50 PM"
        message="Some 15 billion years ago the universe emerged from a hot, dense sea of..."
      />
      <ChatTab
        title="Cosmic Evolution"
        time="12:50 PM"
        message="Some 15 billion years ago the universe emerged from a hot, dense sea of..."
      />
      <ChatTab
        title="Cosmic Evolution"
        time="12:50 PM"
        message="Some 15 billion years ago the universe emerged from a hot, dense sea of..."
      />
    </div>
  );
};
