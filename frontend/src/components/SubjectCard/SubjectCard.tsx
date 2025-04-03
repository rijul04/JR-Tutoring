import { Card, CardContent } from "@/components/ui/card";
import styles from "./SubjectCard.module.css";
import { mergeClasses } from "@fluentui/react-components";

type Props = {
  code: string;
  subject: string;
  tutorCount?: number;
};

export default function subjectCard({ code, subject, tutorCount }: Props) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>
        <div className={styles.badge}>{code}</div>
        <h4 className={styles.language}>{subject}</h4>
        {/* <p className={styles.tutorCount}>{tutorCount} Tutors</p> */}
      </CardContent>
    </Card>
  );
}
