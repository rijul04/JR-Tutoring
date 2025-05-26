import {
  TutorProfileReadSummary,
  UsersTutorsSummaryList200,
} from "@/api/generated";
import TutorSummaryCard from "@/features/cards/components/TutorSummaryCard/TutorSummaryCard";

import styles from "./TutorInfoBlock.module.css";
import { Separator } from "../ui/separator";

export default function TutorInfoBlock({
  tutorSummaryListData,
}: {
  tutorSummaryListData: UsersTutorsSummaryList200;
}) {
  return (
    <div className={styles.InfoBlocks}>
      {tutorSummaryListData.map((tutorSummary) => (
        <>
          <div className={styles.InfoBlockElement}>
            <TutorSummaryCard
              fullName={tutorSummary.full_name}
              bio={tutorSummary.bio}
              subjects={tutorSummary.subjects}
              image={tutorSummary.image}
              rating={tutorSummary.rating}
            />
            <div className={styles.blockTextInfo}>
              <p>{tutorSummary.full_name}</p>
              <p>{tutorSummary.bio}</p>
              <p>Trial: Free</p>
            </div>
          </div>

          <Separator />
        </>
      ))}
    </div>
  );
}
