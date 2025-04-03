"use client";

import { GraduationCap, Shield, BookOpen, DollarSign } from "lucide-react";

import Image from "next/image";
import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";
import SubjectCard from "@/components/SubjectCard/SubjectCard";
import { Label } from "@/components/ui/label";
import StepCircle from "@/components/CircleList/CircleList";
import CircleList from "@/components/CircleList/CircleList";
import { IconCircle } from "@/features/icons/components/IconCircle/IconCircle";

// once done with this stuff need to use a different component library that doesnt use tailwind as dont like it but for now using it is fine to do the small stuff

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero
        background="/images/TutorHome.png"
        customHeight={"80vh"}
        className={styles.basicText}
      >
        <h6>Looking for a new Tutor?</h6>
        <h3>Start Learning today with us at JR Tutoring!</h3>
      </Hero>
      <Hero
        background="/images/BasicBackground1.png"
        className={styles.basicGrid}
      >
        <SubjectCard code="GCSE / A Level" subject="Mathematics" />
        <SubjectCard code="GCSE / A Level" subject="Further Mathematics" />
        <SubjectCard code="GCSE / A Level" subject="Chemistry" />
        <SubjectCard code="GCSE / A Level" subject="Biology" />
        <SubjectCard code="GCSE / A Level" subject="Computer Science" />
        <SubjectCard code="GCSE" subject="Physics" />
      </Hero>
      <Hero
        background="/images/BasicBackground2.jpg"
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
              <h5>Let Us Know Your Needs</h5>
              <p>
                We will then reach out to you and the tutee to have a short
                meeting to really get to know the tutee.
              </p>
            </>,
            <>
              <h5>We Will Match You With The Perfect Tutor</h5>
              <p>
                The tutee will have a free lesson from the tutor that we find to
                check if the tutor and tutee match.
              </p>
            </>,
            <>
              <h5>From here, Ready, Set, GO</h5>
              <p>The tutee starts to improve in their subject!</p>
            </>,
          ]}
        />
      </Hero>
      <Hero
        background="/images/BasicBackground3.jpg"
        className={styles.basicGrid}
      >
        <div>
          <IconCircle icon={<GraduationCap size={16} />} />
          <h4>Expert Tutors</h4>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <IconCircle icon={<Shield size={16} />} />
          <h4>Verified Profiles</h4>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <IconCircle icon={<BookOpen size={16} />} />
          <h4>Pay Per Lesson</h4>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div>
          <IconCircle icon={<DollarSign size={16} />} />
          <h4>Affordable Prices</h4>
          <p>
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </Hero>
    </div>
  );
}
