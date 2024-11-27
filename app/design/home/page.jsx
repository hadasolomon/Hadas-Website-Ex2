"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css"; // CSS Module for styling

export default function App() {

  const[showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page_container}>
      <div className={styles.top_container}>
        <div className={styles.logo_container}>
          <div className={`${styles.logo} ${showElements ?styles.logo_center : styles.logo_final }`}>
            <img src="/logo.png" alt="Logo" />
          </div>
        </div>
        <div className={`${styles.description_container} ${showElements ? styles.show : ""}`}>
          <h2>Welcome</h2>
        </div>
      </div>
    </div>
  );
}
