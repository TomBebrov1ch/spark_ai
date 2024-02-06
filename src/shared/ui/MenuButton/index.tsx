import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";
interface MenuButtonProps {
  icon: IconDefinition;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ icon }) => {
  return (
    <button className={styles.menu_button}>
      <FontAwesomeIcon
        className={styles.menu_button__icon}
        icon={icon}
        size="2xs"
      />
    </button>
  );
};
