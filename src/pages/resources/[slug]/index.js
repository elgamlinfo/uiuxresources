/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResourcesServices from "@/services/uiUxResources.services";

import UiUxResources from "@/components/layouts/UiUxResources";
import FirstContentSection from "@/components/uiuxresourses/Content/FirstContentSection";
import Categories from "@/components/uiuxresourses/Categories/Categories";
import SecondContentSection from "@/components/uiuxresourses/Content/SecondContentSection";

function Slug({ data }) {
  return (
    <>
      <SEOHead title="Resources" description="description of the page " />
      <UiUxResources>
        {data && (
          <>
            <FirstContentSection
              title={data?.headerContent?.title}
              description={data?.headerContent?.description}
              image={data?.headerContent?.image}
            />
            <Categories categories={data?.categories || []} />
            <SecondContentSection
              title={data?.footerContent?.title}
              description={data?.footerContent?.description}
            />
          </>
        )}
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const uiUxReq = await UiUxResourcesServices.getUiUxResources();
    const [{ data }] = await Promise.all([uiUxReq]);
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

export default Slug;
