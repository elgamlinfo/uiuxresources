/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import FirstContentSection from "@/components/resources/FirstContentSection/FirstContentSection";
import Categories from "@/components/resources/Categories/Categories";
import LatestResources from "@/components/resources/LatestResources/LatestResources";
import WorkTogetherSection from "@/components/resources/WorkTogetherSection/WorkTogetherSection";

import UiUxResourcesServices from "@/services/uiUxResources.services";

function Resources({ pages, categories }) {
  console.log(pages);


  return (
    <>
      <SEOHead title="Resources" description="description of the page " />
      <UiUxResources>
        <FirstContentSection />
        <Categories categories={categories ? categories : []} />
        <LatestResources resources={pages||[]} />
       
      </UiUxResources>
    </>
  );
}



export async function getServerSideProps() {
  try {
    const uiUxReq = await UiUxResourcesServices.getUiUxResourcesHomePage();
    const [{ data }] = await Promise.all([uiUxReq]);
    console.log(data);
    return {
      props: {
        pages: data?.data?.Pages,
        categories: data?.data?.Categories,
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
