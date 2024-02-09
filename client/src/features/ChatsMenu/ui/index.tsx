import React from "react";
import { ChatTab } from "@shared/ui/Chats/ChatTab";
import { SearchBar } from "@features/SearchBar/ui/Searchbar.client";

import styles from "./styles.module.scss";

// import { AddButton } from "@shared/ui/AddButton/index.client";

export const ChatsMenu = () => {
  return (
    <div className={styles.chats_menu}>
      <div className={styles.chats_menu__upper}>
        <span className={styles.chats_menu__upper__title}>My Chats</span>
        {/* <AddButton onClick={() => console.log("clicked")} /> */}
      </div>
      <SearchBar />
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
