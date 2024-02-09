"use client";
import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSearchLocation } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isLabelVisible, setLabelVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleInputBlur = () => {
    setLabelVisible(query === "");
  };

  useEffect(() => {
    setLabelVisible(query === "");
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.relative_form}>
      <label className={styles.search_label} htmlFor="searchBar">
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.search_label__icon}
        />
        <span
          className={`${styles.search_label__text} ${
            isLabelVisible ? "visible" : "hidden"
          }`}
        >
          Search...
        </span>
      </label>
      <input
        ref={inputRef}
        onBlur={handleInputBlur}
        className={styles.search_bar}
        type="text"
        id="searchBar"
        autoComplete="off"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};
