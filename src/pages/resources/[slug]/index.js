/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResourcesServices from "@/services/uiUxResources.services";

import UiUxResources from "@/components/layouts/UiUxResources";
import FirstContentSection from "@/components/uiuxresourses/Content/FirstContentSection";
import Categories from "@/components/uiuxresourses/Categories/Categories";
import WorkTogetherSection from "@/components/resources/WorkTogetherSection/WorkTogetherSection";

function Slug({ data, params}) {
  return (
    <>
      <SEOHead title="Resources" description="description of the page " />
      <UiUxResources>
        {data && (
          <>
            <FirstContentSection
              title={data?.headerContent?.title}
              description={data?.headerContent?.description}
              image={data?.headerContent?.vector}
              images= {data?.headerContent?.Images}
            />
            <Categories categories={data?.categories || []} params={params}/>
          </>
        )}
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const uiUxReq = await UiUxResourcesServices.getUiUxResources();
    const [{ data }] = await Promise.all([uiUxReq]);
    return {
      props: {
        data: data?.data,
        params: context?.params?.slug
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
