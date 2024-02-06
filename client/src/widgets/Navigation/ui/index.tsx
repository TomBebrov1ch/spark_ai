import React from "react";
import { HorizontalMenu } from "@features/HorizontalMenu/ui";
import { ChatsMenu } from "@features/ChatsMenu/ui";

import styles from "./styles.module.scss";

export const Navigation = () => {
  return (
    <aside className={styles.navigation_menu}>
      <HorizontalMenu />
      <ChatsMenu />
    </aside>
  );
};
