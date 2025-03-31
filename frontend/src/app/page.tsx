"use client";

import Image from "next/image";
import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";
import SubjectCard from "@/components/SubjectCard/SubjectCard";

// once done with this stuff need to use a different component library that doesnt use tailwind as dont like it but for now using it is fine to do the small stuff

export default function Home() {
  return (
    <>
      <Hero background="/images/TutorHome.png" className={styles.basicText}>
        <p>Looking for a new Tutor?</p>
        <h3>Start Learning today with us at JR Tutoring!</h3>
      </Hero>
      <Hero
        background="/images/BasicBackground.png"
        className={styles.subjectCards}
      >
        <SubjectCard code="GCSE / A Level" subject="Mathematics" />
        <SubjectCard code="GCSE / A Level" subject="Further Mathematics" />
        <SubjectCard code="GCSE / A Level" subject="Chemistry" />
        <SubjectCard code="GCSE / A Level" subject="Biology" />
        <SubjectCard code="GCSE / A Level" subject="Computer Science" />
        <SubjectCard code="GCSE" subject="Physics" />
      </Hero>
    </>
  );
}
