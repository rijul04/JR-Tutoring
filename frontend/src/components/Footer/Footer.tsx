import * as React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© {new Date().getFullYear()} JR Tutoring. All rights reserved.</p>
        <div>
          <a href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.footerLink}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
