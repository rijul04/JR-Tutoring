import { Card, CardContent } from "@/components/ui/card";
import styles from "./PopBaseCard.module.css";
import React, { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export default function PopBaseCard({ children }: Props) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>{children}</CardContent>
    </Card>
  );
}
