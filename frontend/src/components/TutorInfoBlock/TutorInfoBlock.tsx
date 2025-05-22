import { TutorProfileReadSummary } from "@/api/generated";
import TutorSummaryCard from "@/features/cards/components/TutorSummaryCard/TutorSummaryCard";

import styles from "./TutorInfoBlock.module.css";

export default function TutorInfoBlock({
  tutorSummary,
}: {
  tutorSummary: TutorProfileReadSummary;
}) {
  return (
    <div className={styles.InfoBlock}>
      <TutorSummaryCard
        fullName={tutorSummary.full_name}
        bio={tutorSummary.bio}
        subjects={tutorSummary.subjects}
        image={tutorSummary.image}
      />
      <div className={styles.blockTextInfo}>
        <p>{tutorSummary.full_name}</p>
      </div>
    </div>
  );
}
