/** @format */

import { Col, Container, Row } from "reactstrap";

import styles from "./Content.module.scss";

const FirstContentSection = ({ title, description, image }) => {
  return (
    <div className={styles["firstContentSection"]} style={{backgroundImage: `url("${image}")`}}>
      <Container>
        <Row>
          <Col className={styles["pl"]} xs={12} md={6}>
            <h2>{title && title}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <p>{description && description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstContentSection;
