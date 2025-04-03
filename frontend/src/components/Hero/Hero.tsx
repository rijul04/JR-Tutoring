import { mergeClasses } from "@fluentui/react-components";

import styles from "./Hero.module.css";

type Props = {
  background: string;
  children: React.ReactNode;
  className?: string;
};

export default function Hero({
  background,
  children,
  className,
}: Readonly<Props>) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className={mergeClasses(className ? className : "", styles.children)}
      >
        {children}
      </div>
    </section>
  );
}
