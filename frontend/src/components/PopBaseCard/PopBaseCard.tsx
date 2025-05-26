import { Card, CardContent } from "@/components/ui/card";
import styles from "./PopBaseCard.module.css";
import React, { JSX } from "react";
import { mergeClasses } from "@fluentui/react-components";

type Props = {
  children: JSX.Element;
  className?: string;
};

export default function PopBaseCard({ children, className }: Props) {
  return (
    <Card className={mergeClasses(styles.card, className)}>
      <CardContent className={styles.content}>{children}</CardContent>
    </Card>
  );
}
