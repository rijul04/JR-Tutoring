import React, { JSX } from "react";
import styles from "./CircleList.module.css";

type Props = {
  list: JSX.Element[];
};

export default function CircleList({ list }: Readonly<Props>) {
  return (
    <>
      <ul className={styles.list}>
        {list.map((element, index) => (
          <li key={index} className={styles.listElement}>
            <StepCircle number={index + 1} />
            <div>{element}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

function StepCircle({ number }: { number: number }) {
  return <div className={styles.circle}>{number}</div>;
}
