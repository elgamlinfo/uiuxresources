/** @format */

import SEOHead from "@/components/global/SEOHead/SEOHead";

import UiUxResources from "@/components/layouts/UiUxResources";

function Resources({ data }) {
  return (
    <>
      <SEOHead title="Resources" description="description of the page " />
      <UiUxResources>
        <div style={{ color: "white" }}>Hello from resources page</div>
      </UiUxResources>
    </>
  );
}

export default Resources;
