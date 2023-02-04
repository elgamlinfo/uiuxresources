/** @format */

import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

import styles from "./Content.module.scss";

const SecondContentSection = ({ title, description }) => {
  return (
    <Link href="/" className={styles["secondContentSection"]}>
      <Container>
        <p>{title && title}</p>
        <h2>{description && description}</h2>
      </Container>
    </Link>
  );
};

export default SecondContentSection;
