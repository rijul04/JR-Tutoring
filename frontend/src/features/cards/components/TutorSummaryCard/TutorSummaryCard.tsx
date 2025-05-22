import PopBaseCard from "@/components/PopBaseCard/PopBaseCard";
import styles from "./TutorSummaryCard.module.css";
import { TutorProfileReadSummary } from "@/api/generated";

import { HatGraduation24Filled } from "@fluentui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <Avatar className={styles.avatar}>
          <AvatarImage
            className={styles.image}
            src={`data:image/png;base64,${image}`}
            alt={`${fullName}'s avatar`}
          />
          <AvatarFallback>{`${fullName}'s avatar`}</AvatarFallback>
        </Avatar>
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
      {/* just showing one thing for now */}
      <p>{subjects[0]?.name}</p>
    </div>
  );
}
