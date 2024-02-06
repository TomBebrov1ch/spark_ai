// use client
"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.add_button} onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};
