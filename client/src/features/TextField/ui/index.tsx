import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export const TextField = () => {
  return (
    <div className={styles.text_field}>
      <input type="text" className={styles.text_field__input} />
      <FontAwesomeIcon icon={faPaperPlane} className={styles.text_field_icon} />
    </div>
  );
};
