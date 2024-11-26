"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css"; // CSS Module for styling


function App() {
  const [showForm, setShowForm] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false); // NEW STATE

  useEffect(() => {
    // Trigger the animation after 0.5 seconds
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 200);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // NEW USEEFFECT FOR KEYBOARD DETECTION
  useEffect(() => {
    const initialHeight = window.innerHeight;

    const handleResize = () => {
      if (window.innerHeight < initialHeight) {
        setIsKeyboardOpen(true); // Keyboard opened
      } else {
        setIsKeyboardOpen(false); // Keyboard closed
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <>
    <div className={styles.App}>
      <div className={`${styles["logo-container"]}`}>
        <img
          src="/logo.png"
          alt="Logo"
          className={`${styles.logo} ${showForm ? `${styles["logo-slide-up"]} ${styles["logo-grow"]}` : ""}`}
          />
        <div className={`${styles["logo-text"]} ${showForm ? styles["show-text"] : ""}`}>
          <h2>ORIGAMIZ</h2>
          <p>The creative meditation</p>
        </div>
        
      </div>
      <div className={`${styles["additionalText"]} ${showForm ? styles["additionalTextHidden"] : ""}`}>
        <p>Shape mindfulness,<br />one fold at a time.</p>
      </div>
      
      <div className={`${styles["form-container"]} ${showForm ? styles["slide-in"] : ""}`}>
        <img src="/paper.png" alt="Paper Background" className={styles.paper} />
        <form className={styles.form}>
    
          <input id="email" type="email" placeholder="E-Mail"/>
          <span></span>

          <input id="password" type="password" placeholder="Password" />
          <p>Forgot Your Password?</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default App;
