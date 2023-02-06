/** @format */

import { useEffect } from "react";
import Header from "@/components/global/HeaderTest/Header";
import Footer from "@/components/global/Footer/Footer";
import Sidebar from "@/components/global/SidebarTest/Sidebar";
import ScrollTop from "@/components/global/ScrollTop";
import WorkTogetherSection from "../resources/WorkTogetherSection/WorkTogetherSection";

const UiUxResources = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      {/* {image && (
        <Image
          src={image}
          width={800}
          height={800}
          className="illustration-image"
          alt="illustration"
        />
      )} */}

      <Header />
      <Sidebar />
      <main>{children}</main>
      <ScrollTop />
        <WorkTogetherSection
            title="Work On!"
            description="Together, let's build a fantastic resources website! and to rank among the largest websites in the world."
        />
      <Footer />
    </>
  );
};

export default UiUxResources;
