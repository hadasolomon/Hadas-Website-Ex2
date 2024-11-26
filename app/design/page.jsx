"use client";
import "@/styles/reset.css";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css"; // CSS Module for styling

export default function App() {

  const[showElements, setShowElements] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setEmailInvalid(!email.includes("@"));
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.top_container}>
        <div className={styles.logo_container}>
          <div className={`${styles.logo} ${showElements ? styles.logo_final : styles.logo_center}`}>
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className={`${styles.logo_text} ${showElements ? styles.show : ""}`}>
            <h2>ORIGAMIZ</h2>
            <p>The creative meditation</p>
          </div>
          </div>
        <div className={`${styles.description_container} ${showElements ? styles.show : ""}`}>
          <h2>Shape mindfulness,<br/>one fold at time.</h2>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={`${styles.paper_form_container} ${showElements ? styles.paper_slide_in : ""}`}>
          <img src="/paper.png" alt="Paper Background" className={styles.paper} />
          <form className={styles.form}>
          <span className={`${styles.error_message} ${emailInvalid ? styles.show : styles.hide}`}>
            enter a valid email address</span>
            <input id="email" type="email" placeholder="E-Mail" onBlur={handleEmailBlur} required />
            <div className={styles.password_container}>
            <input id="password" type="password" placeholder="Password" />
            <span className={styles.passwordIcon}><img  src="/showPassword.png"/></span>
            </div>
            <p>Forgot Your Password?</p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
