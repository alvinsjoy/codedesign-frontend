"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Popup from "@/components/popup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button className={styles.button} onClick={() => setIsPopupOpen(true)}>
          EXPORT CODE
        </button>
      </main>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
