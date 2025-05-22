import PopBaseCard from "@/components/PopBaseCard/PopBaseCard";
import styles from "./TutorSummaryCard.module.css";
import {
  TutorProfileReadSummary,
  UsersTutorsSummaryList200,
} from "@/api/generated";

import { HatGraduation24Filled } from "@fluentui/react-icons";

type Props = {
  fullName: TutorProfileReadSummary["full_name"];
  bio: TutorProfileReadSummary["bio"];
  subjects: TutorProfileReadSummary["subjects"];
  image: TutorProfileReadSummary["image"];
};

export default function TutorSummaryCard({
  fullName,
  bio,
  subjects,
  image,
}: Readonly<Props>) {
  return (
    <PopBaseCard>
      <>
        <img
          src={`data:image/png;base64,${image}`}
          alt={`${fullName}'s avatar`}
          className={styles.avatar}
        />
        <SubjectsBaseList subjects={subjects} />
      </>
    </PopBaseCard>
  );
}

function SubjectsBaseList({
  subjects,
}: {
  subjects: React.ComponentProps<typeof TutorSummaryCard>["subjects"];
}) {
  return (
    <div className={styles.subjectList}>
      <HatGraduation24Filled />
    </div>
  );
}
