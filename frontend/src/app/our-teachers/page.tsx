"use client";

import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <Hero
      background={"/images/Teachers.jpg"}
      customHeight={"80vh"}
      className={styles.basicText}
    >
      <h6>Teachers</h6>
      <h3>Browse Our Current Teachers</h3>
    </Hero>
  );
}
