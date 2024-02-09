import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import styles from "./styles.module.scss";

export const TextField = () => {
  return (
    <div className={styles.text_field}>
      <input
        type="text"
        placeholder="Ask questions, or type ‘/’ for commands"
        className={styles.text_field__input}
      />
      <FontAwesomeIcon
        icon={faPaperPlane}
        className={styles.text_field__icon}
      />
    </div>
  );
};
