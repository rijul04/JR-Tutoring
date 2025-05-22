import { Button } from "../ui/button";

import styles from "./CTAButton.module.css";

type ButtonProps = React.ComponentProps<typeof Button> & {
  text: string;
};

export default function CTAButton({ text, ...props }: ButtonProps) {
  return (
    <Button className={styles.ctaBtn} {...props}>
      {text}
    </Button>
  );
}
