/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import FirstContentSection from "@/components/resources/FirstContentSection/FirstContentSection";
import Categories from "@/components/resources/Categories/Categories";
import LatestResources from "@/components/resources/LatestResources/LatestResources";
import WorkTogetherSection from "@/components/resources/WorkTogetherSection/WorkTogetherSection";

import UiUxResourcesServices from "@/services/uiUxResources.services";

function Resources({ data }) {
  const categories = [
    { icon: "", name: "User interface" },
    { icon: "", name: "User interfacse" },
    { icon: "", name: "User interface" },
    { icon: "", name: "User interface" },
    { icon: "", name: "User interface" },
    { icon: "", name: "User interface" },
    { icon: "", name: "User interface" },
  ];

  return (
    <>
      <SEOHead title="Resources" description="description of the page " />
      <UiUxResources>
        <FirstContentSection />
        <Categories categories={categories ? categories : []} />
        <LatestResources resources={data?.InnerPage ? data?.InnerPage : []} />
        <WorkTogetherSection
          title="Work On!"
          description="Together, let's build a fantastic resources website! and to rank among the largest websites in the world."
        />
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const subCategoryReq = await UiUxResourcesServices.getSubCategoryByName(
      "icons"
    );
    const [{ data }] = await Promise.all([subCategoryReq]);

    return {
      props: {
        data: data?.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
    };
  }
}
export default Resources;
