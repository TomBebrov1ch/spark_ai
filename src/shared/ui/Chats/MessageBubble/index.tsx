import React from "react";

import styles from "./styles.module.scss";

interface MessageBubbleProps {
  name: string;
  data: string;
  message: string;
  isSender: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  name,
  data,
  message,
}) => {
  return <div className={styles.bubble}>index</div>;
};
