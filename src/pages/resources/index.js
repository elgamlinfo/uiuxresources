/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";
import FirstContentSection from "@/components/resources/FirstContentSection/FirstContentSection";
import Categories from "@/components/resources/Categories/Categories";
import LatestResources from "@/components/resources/LatestResources/LatestResources";

import UiUxResourcesServices from "@/services/uiUxResources.services";

function Resources({
  pages,
  categories,
  headerContent,
  footerContent,
  seoData,
}) {
  console.log(headerContent);
  return (
    <>
      <SEOHead
        title={seoData?.titleEn}
        description={seoData?.descriptionEn}
        ogImgUrl={seoData?.facebookImage}
        keywords={seoData?.keywordsEn}
        ogTitle={seoData?.facebookTitleEn}
        ogDescription={seoData?.facebookDescriptionEn}
      />
      <UiUxResources footerContent={footerContent}>
        <FirstContentSection
          title={headerContent?.title}
          description={headerContent?.description}
          vector={headerContent?.vector}
        />
        <Categories categories={categories ? categories : []} />
        <LatestResources resources={pages || []} />
      </UiUxResources>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try {
    const uiUxReq = await UiUxResourcesServices.getUiUxResources();
    const [{ data }] = await Promise.all([uiUxReq]);
    return {
      props: {
        pages: data?.data?.Pages,
        categories: data?.data?.categories,
        headerContent: data?.data?.headerContent,
        footerContent: data?.data?.footerContent,
        seoData: data?.data?.seo,
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
