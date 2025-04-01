"use client";

import Image from "next/image";
import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";
import SubjectCard from "@/components/SubjectCard/SubjectCard";
import { Label } from "@/components/ui/label";
import StepCircle from "@/components/CircleList/CircleList";
import CircleList from "@/components/CircleList/CircleList";

// once done with this stuff need to use a different component library that doesnt use tailwind as dont like it but for now using it is fine to do the small stuff

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero background="/images/TutorHome.png" className={styles.basicText}>
        <p>Looking for a new Tutor?</p>
        <h3>Start Learning today with us at JR Tutoring!</h3>
      </Hero>
      <Hero
        background="/images/BasicBackground1.png"
        className={styles.subjectCards}
      >
        <SubjectCard code="GCSE / A Level" subject="Mathematics" />
        <SubjectCard code="GCSE / A Level" subject="Further Mathematics" />
        <SubjectCard code="GCSE / A Level" subject="Chemistry" />
        <SubjectCard code="GCSE / A Level" subject="Biology" />
        <SubjectCard code="GCSE / A Level" subject="Computer Science" />
        <SubjectCard code="GCSE" subject="Physics" />
      </Hero>
      <Hero
        background="/images/BasicBackground2.png"
        className={styles.howItWorks}
      >
        <div>
          <h4>How we find the perfect tutor for you</h4>
          <p>We believe in chemistry between Tutor and Tutee.</p>
        </div>
        <Image
          src="/images/VerticalLaptopUse.jpg"
          width={500}
          height={500}
          alt="Vertical Laptop Use"
        />
        <CircleList
          list={[
            <>
              <Label>Let Us Know Your Needs</Label>
              <p>
                We will then reach out to you and the tutee to have a short
                meeting to really get to know the tutee.
              </p>
            </>,
            <>
              <Label>We Will Match You With The Perfect Tutor</Label>
              <p>
                The tutee will have a free lesson from the tutor that we find to
                check if the tutor and tutee match.
              </p>
            </>,
            <>
              <Label>From here, Ready, Set, GO</Label>
              <p>The tutee starts to improve in their subject!</p>
            </>,
          ]}
        />
      </Hero>
    </div>
  );
}
