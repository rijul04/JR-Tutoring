"use client";

import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";
import { useUsersTutorsSummaryList } from "@/api/generated";
import TutorSummaryCard from "@/features/cards/components/TutorSummaryCard/TutorSummaryCard";
import TutorInfoBlock from "@/components/TutorInfoBlock/TutorInfoBlock";
import SignUpAdvert from "@/components/SignUpAdvert/SignUpAdvert";

export default function AboutPage() {
  const { data: tutorsSummaryListData } = useUsersTutorsSummaryList();
  console.log("tSD", tutorsSummaryListData);
  return (
    <>
      <Hero
        background={"/images/Teachers.jpg"}
        customHeight={"80vh"}
        className={styles.basicText}
      >
        <h6>Teachers</h6>
        <h3>Browse Our Current Teachers</h3>
      </Hero>
      <Hero
        background="/images/BasicBackground1.png"
        // customHeight={"45vh"}
        className={styles.basicText}
      >
        {tutorsSummaryListData && (
          <TutorInfoBlock tutorSummaryListData={tutorsSummaryListData} />
        )}
      </Hero>
      <Hero background="/images/BasicBackground3.jpg">
        <SignUpAdvert />
      </Hero>
    </>
  );
}
