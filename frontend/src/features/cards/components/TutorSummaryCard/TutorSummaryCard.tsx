import PopBaseCard from "@/components/PopBaseCard/PopBaseCard";
import styles from "./TutorSummaryCard.module.css";
import { TutorProfileReadSummary } from "@/api/generated";

import { Add24Filled, HatGraduation24Filled } from "@fluentui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BasePopOver from "@/components/BasePopOver/BasePopOver";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/StarRating/StarRating";
import CTAButton from "@/components/CTAButton/CTAButton";

type Props = {
  fullName: TutorProfileReadSummary["full_name"];
  bio: TutorProfileReadSummary["bio"];
  subjects: TutorProfileReadSummary["subjects"];
  image: TutorProfileReadSummary["image"];
  rating: TutorProfileReadSummary["rating"];
};

export default function TutorSummaryCard({
  fullName,
  bio,
  subjects,
  image,
  rating,
}: Readonly<Props>) {
  return (
    <PopBaseCard className={styles.popBaseCard}>
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

        <div className={styles.rating}>
          <caption>
            <p>{rating}</p>
          </caption>
          <StarRating rating={Number(rating)} />
        </div>

        <CTAButton text={"Book Trial"} />
      </>
    </PopBaseCard>
  );
}

function SubjectsBaseList({
  subjects,
}: {
  subjects: React.ComponentProps<typeof TutorSummaryCard>["subjects"];
}) {
  if (subjects.length === 0) return <HatGraduation24Filled />;
  return (
    <div className={styles.subjectList}>
      <HatGraduation24Filled />
      <p>{subjects[0]?.name}</p>
      <BasePopOver trigger={<Add24Filled className={styles.triggerIcon} />}>
        {subjects.map((subject) => {
          return (
            <div className={styles.popOverSubject}>
              <p>{subject.name}</p>
              <Separator orientation="vertical" className={styles.separator} />
              <p>{subject.level}</p>
            </div>
          );
        })}
      </BasePopOver>
    </div>
  );
}
