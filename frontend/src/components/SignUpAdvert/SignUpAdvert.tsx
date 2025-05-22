import styles from "./SignUpAdvert.module.css";
import { Button } from "../ui/button";
import CTAButton from "../CTAButton/CTAButton";

export default function SignUpAdvert() {
  return (
    <section className={styles.signUpAdvert}>
      <div className={styles.basicText}>
        <h6>Choose a teacher for 1-on-1 lessons</h6>
        <h3>Start Learning today with us at JR Tutoring!</h3>
      </div>
      <CTAButton text="Sign Up" />
    </section>
  );
}
