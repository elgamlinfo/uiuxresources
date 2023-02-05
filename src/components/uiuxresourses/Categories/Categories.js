/** @format */

import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Masonry from "react-masonry-css";

import TabHeader from "@/components/global/Tab/TabHeader";
import TabHeaderForMobile from "@/components/global/Tab/TabHeaderForMobile";
import SubCategoryCard from "@/components/global/Cards/SubCategoryCard/SubCategoryCard";
import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";

import styles from "./Categories.module.scss";

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [categoryDisplayed, setCategoryDisplayed] = useState(categories[0]);

  const categoryTitles = categories.map((category) => category.name);

  useEffect(() => {
    setCategoryDisplayed(categories[activeCategory]);
  }, [activeCategory]);

  return (
    <div className={styles["categories"]}>
      <Container>
        <Row className="gx-1 justify-content-between">
          <Col md={3} className="p-0 d-none d-md-block">
            <TabHeader
              tabHeaderData={categoryTitles}
              setActiveTab={setActiveCategory}
              activeTab={activeCategory}
            />
          </Col>

          <Col xs={12} className="d-md-none">
            <TabHeaderForMobile
              tabHeaderData={categoryTitles}
              setActiveTab={setActiveCategory}
              activeTab={activeCategory}
            />
          </Col>

          {categoryDisplayed?.subCategoeries?.length === 0 ? (
            <>
              <Col xs={12} md={9}>
                <Row className={styles["leftSpacingForInnerCards"]}>
                  <Masonry
                    breakpointCols={{ default: 3, 768: 2 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {categoryDisplayed?.InnerPage?.map((innerPage, i) => (
                      <InnerPageCard
                        innerPage={innerPage}
                        key={innerPage?.id || i}
                      />
                    ))}
                  </Masonry>
                </Row>
              </Col>
            </>
          ) : (
            <>
              <Col xs={12} md={8}>
                <Row className="g-4">
                  {categoryDisplayed?.subCategoeries?.map((subCategory, i) => (
                    <SubCategoryCard key={i} subCategory={subCategory} />
                  ))}
                </Row>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
