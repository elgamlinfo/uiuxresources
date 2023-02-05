/** @format */

import { Container } from "reactstrap";

import styles from "./WorkTogetherSection.module.scss";

const WorkTogetherSection = ({ title, description }) => {
  return (
    <section className={styles["workTogetherSection"]}>
      <Container>
        <p>{title && title}</p>
        <h2>{description && description}</h2>
      </Container>
    </section>
  );
};

export default WorkTogetherSection;
