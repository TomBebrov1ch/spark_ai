import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MenuButton } from "@shared/ui/MenuButton";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

import logo from "@assets/logo/logo.png";

import styles from "./styles.module.scss";

export const HorizontalMenu = () => {
  return (
    <aside className={styles.horizontal_menu}>
      <Image className={styles.horizontal_menu__logo} src={logo} alt="logo" />
      <nav className={styles.horizontal_menu__navigation}>
        <Link href={"/chats"}>
          <MenuButton icon={faMessage} />
        </Link>
        <Link href={"/chats"}>
          <MenuButton icon={faMessage} />
        </Link>
        <Link href={"/chats"}>
          <MenuButton icon={faMessage} />
        </Link>
        <Link href={"/chats"}>
          <MenuButton icon={faMessage} />
        </Link>
      </nav>
    </aside>
  );
};
