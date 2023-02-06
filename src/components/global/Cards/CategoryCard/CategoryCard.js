/** @format */

import Link from "next/link";
import Image from "next/image";

import { Col } from "reactstrap";

import styles from "./CategoryCard.module.scss";

import { TestIcon } from "@/components/global/Svgs";

const CategoryCard = ({ icon, name }) => {

  console.log(icon);
  return (
    <Col xs={6} md={3}>
      <Link href={`/resources/${name}`} className={styles["categoryCard"]}>
        <div> 
        <div className={styles["imageContainer"]}>
          <div dangerouslySetInnerHTML={{__html: icon}}/> 
        </div>
        {/* <div dangerouslySetInnerHTML={{__html: icon}}/>  */}
        </div>
        <p>{name}</p>
      </Link>
    </Col>
  );
};

export default CategoryCard;
