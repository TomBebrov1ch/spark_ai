import React from "react";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.header__title}>Title</span>
      {/* There should be a user */}
      <div className="rounded-2xl bg-red-400 w-8 h-8"></div>
    </header>
  );
};
