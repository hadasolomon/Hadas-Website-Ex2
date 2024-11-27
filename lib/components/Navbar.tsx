"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";
import styles from "./Navbar.module.css"; // Import CSS module for styling

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <header id="navbar" className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="/design">Login</Link>
        <Link href="/">Home</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        <Link href="/tic-tac-toe">Tic Tac Toe</Link>
        <Link href="/nasa">NASA</Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
      </nav>
    </header>
  );
}