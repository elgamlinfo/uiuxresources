/** @format */

import { useState } from "react";

import Masonry from "react-masonry-css";
import { Container } from "reactstrap";

import InnerPageCard from "@/components/global/Cards/InnerPageCard/InnerPageCard";

import styles from "./InnerPage.module.scss";

const Resources = ({ innerPages }) => {
  const [innerPageNum, setInnerPageNum] = useState(8);

  const handleLoadMore = () => {
    setInnerPageNum((prevInnerNum) => prevInnerNum + 8);
  };
  return (
    <div className={styles["resources"]}>
      <Container className="p-0">
        <Masonry
          breakpointCols={{ default: 4, 768: 2 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {innerPages?.slice(0, innerPageNum)?.map((innerPage, i) => (
            <InnerPageCard innerPage={innerPage} key={innerPage?.id || i} />
          ))}
        </Masonry>
        {innerPageNum < innerPages?.length && (
          <div className={styles["loadMore"]}>
            <button type="button" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Resources;
