import styles from "./SubjectCard.module.css";
import PopBaseCard from "@/components/PopBaseCard/PopBaseCard";

type Props = {
  code: string;
  subject: string;
  tutorCount?: number;
};

export default function subjectCard({ code, subject, tutorCount }: Props) {
  return (
    <PopBaseCard>
      <>
        <div className={styles.badge}>{code}</div>
        <h4 className={styles.language}>{subject}</h4>
        {/* <p className={styles.tutorCount}>{tutorCount} Tutors</p> */}
      </>
    </PopBaseCard>
  );
}
