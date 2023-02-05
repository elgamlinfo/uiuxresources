/** @format */

import { Container } from "reactstrap";
import styles from "./FirstContentSection.module.scss";

const FirstContentSection = () => {
  return (
    <section className={styles["firstContentSection"]}>
      <Container>
        <div className={styles["text"]}>
          <h1>Find incredibly helpful design resources and tools.</h1>
          <p>
            Each week, more than 1000 design resources are added to a growing
            library for the design community.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FirstContentSection;
