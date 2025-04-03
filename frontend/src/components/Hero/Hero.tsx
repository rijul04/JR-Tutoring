import { mergeClasses } from "@fluentui/react-components";

import styles from "./Hero.module.css";

type Props = {
  background: string;
  children: React.ReactNode;
  customHeight?: string;
  className?: string;
};

export default function Hero({
  background,
  children,
  customHeight,
  className,
}: Readonly<Props>) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${background})`,
        minHeight: `${customHeight}`,
      }}
    >
      <div className={mergeClasses(styles.children, className)}>{children}</div>
    </section>
  );
}
